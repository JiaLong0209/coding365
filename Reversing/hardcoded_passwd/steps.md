# Solving a Hardcoded Password in a Binary

## Overview
This guide outlines the steps to reverse engineer a binary with a hardcoded password using `gdb` and basic assembly analysis.

## Tools Required
- `gdb` (GNU Debugger)
- Basic knowledge of assembly instructions (`mov`, `cmp`, `jne`, `jmp`, `call`)

## Steps

### 1. **Load the Binary in `gdb`**
   - Start `gdb` with the binary you want to analyze:
     ```bash
     gdb ./your_binary
     ```

### 2. **Disassemble the Main Function**
   - Identify the `main` function where the password is likely being checked:
     ```bash
     disassemble main
     ```

### 3. **Identify Password Storage**
   - Look for `mov` or `movabs` instructions that load immediate values into registers or memory.
   - Example:
     ```asm
     movabs $0x6365737265707573,%rax  ; "supersec" in hex
     mov %rax,-0x4f(%rbp)
     movabs $0x33323174657263,%rax    ; "ret123" in hex
     mov %rax,-0x48(%rbp)
     ```
   - These instructions indicate that the password is hardcoded in memory.

### 4. **Analyze Memory Offsets**
   - The memory addresses like `-0x4f(%rbp)` and `-0x48(%rbp)` are offsets from the base pointer where parts of the password are stored.
   - `-0x4f(%rbp)` holds the first part of the password, and `-0x48(%rbp)` holds the second part.

### 5. **Inspect Memory in `gdb`**
   - Use `gdb` to inspect the memory locations where the password is stored:
     ```bash
     x/s $rbp-0x4f
     x/s $rbp-0x48
     ```
   - This will reveal the hardcoded password string.

### 6. **Understand Conditional Jumps**
   - Identify the `strcmp` function call and the conditional jump that follows:
     ```asm
     call strcmp@plt
     test %eax,%eax ; bitwise AND %eax and %eax, check if %eax is zero
     jne 0xADDRESS  ; Jump if not equal
     ```
   - The `jne` instruction indicates where the program branches depending on the password check result.

### 7. **Determine the Correct Password**
   - By understanding the memory content and the comparison logic (`strcmp`), the correct hardcoded password can be determined.
   - In the given example:
     - First part: "supersec"
     - Second part: "ret123"
     - Combined password: `"supersecret123"`

### 8. **Test the Password**
   - Use the determined password to test the program:
     ```bash
     ./your_binary
     ```
   - Enter the combined password when prompted.

### 9. **Further Analysis (Optional)**
   - Set breakpoints and step through the code to see how the password is processed:
     ```bash
     b main
     r
     ```
   - Use `stepi` and `nexti` to step through the instructions.

### Conclusion
By disassembling the main function and inspecting memory, you can uncover hardcoded passwords in a binary. Understanding basic assembly instructions and how they manipulate data is key to this process.
