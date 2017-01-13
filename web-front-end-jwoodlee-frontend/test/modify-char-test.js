describe("RPG game ", function () {
    beforeEach(() => {
        fixture.setBase("test");
        fixture.load("modifychar.fixture.html");
        window.ModifyChar.init();
    });

    afterEach(() => {
        fixture.cleanup();
    });

    it("should start with fields empty", () => {
        expect($("#id").val()).toBe("");
        expect($("#name").val()).toBe("");
        expect($("#classType").val()).toBe("");
        expect($("#level").val()).toBe("");
        expect($("#money").val()).toBe("");
    });

    describe("API calls", () => {
        var request;

        beforeEach(() => {
            jasmine.Ajax.install();

            $("#id").val("5838138710687744");
            $("#name").val("hello");
            $("#classType").val("student");
            $("#level").val("9");
            $("#money").val("10");
            $("#updatechar-button").click();

            request = jasmine.Ajax.requests.mostRecent();
        });

        afterEach(() => {
            jasmine.Ajax.uninstall();
        });

        it("should trigger a call to the create char url", () => {
            expect(request.url).toBe("http://lmu-diabolical.appspot.com/characters/5838138710687744");
        });
    });
});
