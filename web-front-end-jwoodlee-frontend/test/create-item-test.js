describe("RPG game ", function () {
    beforeEach(() => {
        fixture.setBase("test");
        fixture.load("createitem.fixture.html");
        window.CreateItem.init();
    });

    afterEach(() => {
        fixture.cleanup();
    });

    it("should start with fields empty", () => {
        
    });

    describe("API calls", () => {
        var request;

        beforeEach(() => {
            jasmine.Ajax.install();
            $("#randitem-button").click();
            request = jasmine.Ajax.requests.mostRecent();
        });

        afterEach(() => {
            jasmine.Ajax.uninstall();
        });

        it("should trigger a call to the create char url", () => {
            expect(request.url).toBe("http://lmu-diabolical.appspot.com/items/spawn?level=50&slot=body");
        });
    });
});
