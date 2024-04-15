#!/bin/bash

export GROQ_API_KEY="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"

prompt=$1

if [ $# -lt 1 ]; then
	echo "Usage: $0 {prompt}"
	exit
else 
	echo "Prompt: ${prompt}"
fi


curl -X POST "https://api.groq.com/openai/v1/chat/completions" \
     -H "Authorization: Bearer ${GROQ_API_KEY}" \
     -H "Content-Type: application/json" \
	 -d "{\"messages\": [{\"role\": \"user\", \"content\": \"$prompt\"}, \"model\": \"mixtral-8x7b-32768\"}" | jq

