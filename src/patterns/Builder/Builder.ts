// src/patterns/CToCppBuilder.ts
//c->cpp 변환 코드 ts 파일

// Builder 인터페이스 정의
interface CodeBuilder {
  reset(): void
  convertHeader(): void
  convertPrint(): void
  getResult(): string
}

// ConcreteBuilder: 실제 변환 로직 구현
export class CToCppBuilder implements CodeBuilder {
  private code: string = ''

  reset(): void {
    this.code = ''
  }

  // #include stdio.h → iostream
  convertHeader(): void {
    this.code += '#include <iostream>\nusing namespace std;\n\n'
  }

  // printf() → cout 변환 예시
  convertPrint(): void {
    this.code += 'int main() {\n'
    this.code += '    cout << "Hello, C++ World!" << endl;\n'
    this.code += '    return 0;\n'
    this.code += '}\n'
  }

  getResult(): string {
    return this.code
  }
}

// Director: 변환 순서를 제어하는 역할
export class CodeDirector {
  private builder: CodeBuilder

  constructor(builder: CodeBuilder) {
    this.builder = builder
  }

  constructSimpleProgram(): string {
    this.builder.reset()
    this.builder.convertHeader()
    this.builder.convertPrint()
    return this.builder.getResult()
  }
}
