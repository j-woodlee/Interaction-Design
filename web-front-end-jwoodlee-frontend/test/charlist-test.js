describe("RPG game ", function () {
    beforeEach(() => {
        fixture.setBase("test");
        fixture.load("charlist.fixture.html");
        window.ListChars.init();
    });

    afterEach(() => {
        fixture.cleanup();
    });

    describe("API calls", () => {
        var request;

        beforeEach(() => {
            jasmine.Ajax.install();

            $("#view-char-list-button").click();

            request = jasmine.Ajax.requests.mostRecent();
        });

        afterEach(() => {
            jasmine.Ajax.uninstall();
        });

        it("should trigger a call to the create char url", () => {
            expect(request.url).toBe("http://lmu-diabolical.appspot.com/characters");
        });
    });
});
