import a from "../../src/reducers/aReducer";

describe("A Reducer", () => {

    it("it has default state", () => {
        expect(a(undefined,{type:"unexpected"})).toEqual([]);
    });
    
});
