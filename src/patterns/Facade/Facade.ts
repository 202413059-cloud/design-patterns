// src/patterns/BibleVerseFacade.ts

/**
 * 개별 기능 클래스들
 * (Facade 패턴의 하위 서브시스템 역할)
 */

// 말씀 저장소 (데이터 제공)
class VerseRepository {
  private verses = [
    "요한복음 3:16 — 하나님이 세상을 이처럼 사랑하사 독생자를 주셨으니",
    "시편 23편 — 여호와는 나의 목자시니 내게 부족함이 없으리로다",
    "빌립보서 4:13 — 내게 능력 주시는 자 안에서 내가 모든 것을 할 수 있느니라",
    "잠언 3:5 — 너는 마음을 다하여 여호와를 신뢰하고 네 명철을 의지하지 말라",
    "마태복음 7:7 — 구하라 그러면 너희에게 주실 것이요 찾으라 그러면 찾을 것이요"
  ]

  getRandomVerse(): string {
    const i = Math.floor(Math.random() * this.verses.length)
    return this.verses[i]
  }
}

// 포맷터 (문장 꾸미기)
class VerseFormatter {
  format(verse: string): string {
    return `📖 ${verse}`
  }
}

// 출력기 (로그나 UI용으로 전달)
class VerseDisplay {
  display(verse: string): string {
    console.log(verse)
    return verse
  }
}

/**
 * Facade 클래스 — 복잡한 내부 로직을 하나의 인터페이스로 통합
 */
export class BibleVerseFacade {
  private repo: VerseRepository
  private formatter: VerseFormatter
  private display: VerseDisplay

  constructor() {
    this.repo = new VerseRepository()
    this.formatter = new VerseFormatter()
    this.display = new VerseDisplay()
  }

  getRandomVerse(): string {
    const verse = this.repo.getRandomVerse()
    const formatted = this.formatter.format(verse)
    return this.display.display(formatted)
  }
}
