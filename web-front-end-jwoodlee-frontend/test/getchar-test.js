describe("RPG game ", function () {
    beforeEach(() => {
        fixture.setBase("test");
        fixture.load("getchar.fixture.html");
        window.GetChar.init();
    });

    afterEach(() => {
        fixture.cleanup();
    });

    describe("API calls", () => {
        var request;

        beforeEach(() => {
            jasmine.Ajax.install();
            $("#char-id").val("5838138710687744");
            $("#viewchar-button").click();
            request = jasmine.Ajax.requests.mostRecent();
        });

        afterEach(() => {
            jasmine.Ajax.uninstall();
        });

        it("should trigger a call to the view char url", () => {
            expect(request.url).toBe("http://lmu-diabolical.appspot.com/characters/5838138710687744");
        });
    });
});
