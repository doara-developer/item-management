import { mockReq, mockRes } from "sinon-express-mock";
import { getItems, addItem, updateItem, deleteItem } from "@server/views/items";

jest.mock("@server/controllers/itemManagement");

describe("ItemManagement", () => {
    describe("getItems", () => {
        test("Normal test", () => {
            const jsonMock = jest.fn();
            const dummyReq = mockReq();
            const dummyRes = mockRes();
            getItems(dummyReq, dummyRes);
        });
    });
    describe("addItem", () => {
        test("Normal test", () => {
            const dummyBody = {
                body: {
                    name: "dummyName",
                    purchaseDate: "2021-05-21",
                },
            };
            const dummyReq = mockReq(dummyBody);
            const dummyRes = mockRes();
            addItem(dummyReq, dummyRes);
            expect(dummyRes.status.calledWith(201)).toBeTruthy();
        });
    });
    describe("updateItem", () => {
        test("Normal test", () => {
            const dummyBody = {
                params: {
                    itemId: "dummyId",
                },
                body: {
                    name: "dummyName",
                    purchaseDate: "2021-05-21",
                },
            };
            const dummyReq = mockReq(dummyBody);
            const dummyRes = mockRes();
            updateItem(dummyReq, dummyRes);
            expect(dummyRes.status.calledWith(200)).toBeTruthy();
        });
    });
    describe("deleteItem", () => {
        test("Normal test", () => {
            const dummyParams = {
                params: {
                    itemId: "dummyId",
                },
            };
            const dummyReq = mockReq(dummyParams);
            const dummyRes = mockRes();
            deleteItem(dummyReq, dummyRes);
            expect(dummyRes.status.calledWith(200)).toBeTruthy();
        });
    });
});
