from langchain_core.prompts import PromptTemplate
from langchain.tools import tool
from pydantic import BaseModel, Field
from typing import Annotated, Type
from langchain.agents import AgentExecutor, create_react_agent
from langchain_openai import AzureChatOpenAI
from langchain.tools import BaseTool
from typing import Optional, Union
import os
import ast
import math
import requests

# 1. Decorator Method
@tool
def square_area(edge) -> float:
    """use this tool when you need to calculate the area of a sqaure"""
    return float(edge)**2

triangle_desc = (
    "use this tool when you need to calculate the area of a triangle"
    "To use the tool, you must provide all of the following parameters "
    "{'a_side', 'b_side', 'c_side'}."
)

# 2. Class Base Method
class TriangleTool(BaseTool):
    name: str = "Triangle area calculator"
    description: str = triangle_desc

    
    def _run(
        self,
        sides: Optional[Union[int, float, str]] = None,
    ):
        parsed_dict = ast.literal_eval(sides)

        a_side = parsed_dict['a_side']
        b_side = parsed_dict['b_side']
        c_side = parsed_dict['c_side']

        if not all([a_side, b_side, c_side]):
            print(a_side, b_side, c_side)
            raise ValueError("You must provide all three sides of the triangle")
        if a_side <= 0 or b_side <= 0 or c_side <= 0:
            raise ValueError("All sides must be greater than 0")
        if a_side + b_side <= c_side or a_side + c_side <= b_side or b_side + c_side <= a_side:
            raise ValueError("The sum of any two sides must be greater than the third side")
        # calculate the area
        s = (a_side + b_side + c_side) / 2
        area = (s * (s - a_side) * (s - b_side) * (s - c_side)) ** 0.5
        return area


circle_desc = (
    "use this tool when you need to calculate the area of a circle"
    "To use the tool, you must provide the radius of the circle"
)

class CircleToolInput(BaseModel):
    """Input for Circle Tool."""
    text: Annotated[Optional[Union[int, float, str]], Field(description="The radius of the circle")]

class CircleTool(BaseTool):
    name: str = "Circle area calculator"
    description: str = circle_desc
    args_schema: Type[BaseModel] = CircleToolInput

    def _run( self, radius: Optional[Union[int, float, str]] = None,):
        radius = float(radius)
        if not radius:
            print(radius)
            raise ValueError("You must provide the radius of the circle")
        if radius <= 0:
            raise ValueError("Radius must be greater than 0")
        area = radius ** 2 * math.pi
        return area
    
tools = [square_area, CircleTool(), TriangleTool()]

prompt = PromptTemplate.from_template("""Answer the following questions as best you can. You have access to the following tools: {tools} Use the following format: Question: the input question you must answer Thought: you should always think about what to do Action: the action to take, should be one of [{tool_names}] Action Input: the input to the action Observation: the result of the action ... (this Thought/Action/Action Input/Observation can repeat N times) Thought: I now know the final answer Final Answer: the final answer to the original input question Begin! Question: {input} Thought:{agent_scratchpad} """)

model = AzureChatOpenAI(
    api_key=os.getenv("AZURE_API_KEY"),
    openai_api_version="2024-06-01",
    azure_deployment="gpt-4o-mini",
    azure_endpoint="https://ai041-m2op46ox-eastus.openai.azure.com/openai/deployments/gpt-4o-mini/chat/completions?api-version=2024-08-01-preview",
    temperature=0,
)

zero_shot_agent = create_react_agent(
    llm=model,
    tools=tools,
    prompt=prompt,
)

agent_executor = AgentExecutor(agent=zero_shot_agent, tools=tools, verbose=True)

response = agent_executor.invoke({"input": "What is the area of a circle with radius length 10?"})
print(response)

response = agent_executor.invoke({"input": "What is the area of a triangle with sides: 3, 4, 5?"})
print(response)

