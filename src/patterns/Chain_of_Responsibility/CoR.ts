// 저녁메뉴 추천해주기 ts 파일

/**
 * 추상 Handler 클래스
 * 다음 Handler로 요청을 넘길 수 있는 공통 구조
 */
abstract class DinnerHandler {
  protected nextHandler?: DinnerHandler

  setNext(handler: DinnerHandler): DinnerHandler {
    this.nextHandler = handler
    return handler
  }

  abstract recommend(condition: string): string
}

/**
 * 개별 조건에 따른 구체적 Handler들
 */
export class KoreanHandler extends DinnerHandler {
  recommend(condition: string): string {
    if (condition === "한식") return "🍚 한식 추천: 된장찌개, 제육볶음, 김치찌개!"
    return this.nextHandler?.recommend(condition) || "추천할 메뉴가 없습니다."
  }
}

export class SpicyHandler extends DinnerHandler {
  recommend(condition: string): string {
    if (condition === "매운") return "🌶️ 매운 음식 추천: 떡볶이, 불닭볶음면, 김치찜!"
    return this.nextHandler?.recommend(condition) || "추천할 메뉴가 없습니다."
  }
}

export class DietHandler extends DinnerHandler {
  recommend(condition: string): string {
    if (condition === "다이어트") return "🥗 다이어트 추천: 닭가슴살 샐러드, 두부구이, 오트밀!"
    return this.nextHandler?.recommend(condition) || "추천할 메뉴가 없습니다."
  }
}

export class DeliveryHandler extends DinnerHandler {
  recommend(condition: string): string {
    if (condition === "배달") return "🚚 배달 추천: 치킨, 피자, 짜장면!"
    return this.nextHandler?.recommend(condition) || "추천할 메뉴가 없습니다."
  }
}

export class DefaultHandler extends DinnerHandler {
  recommend(): string {
    return "🍱 아무거나 괜찮다면 김치볶음밥 어때요?"
  }
}
