import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

describe('App 테스트', () => {
	let app;

	beforeEach(() => {
		app = new App();
	});

	test('랜덤 숫자 생성 테스트', () => {
		const randomNumber = app.generateRandomNumber();
		expect(randomNumber).toBeGreaterThanOrEqual(0);
		expect(randomNumber).toBeLessThanOrEqual(9);
	});

	test('자동차 상태 업데이트 테스트', () => {
		const carStatus = [0, 0, 0];
		app.updateCarStatus(carStatus, 0);
		expect(carStatus[0]).toBeGreaterThanOrEqual(0);
		expect(carStatus[0]).toBeLessThanOrEqual(1);
	});
});
