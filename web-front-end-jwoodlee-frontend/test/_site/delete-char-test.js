describe("RPG game ", function () {
    beforeEach(() => {
        fixture.setBase("test");
        fixture.load("deletechar.fixture.html");
        window.DelChar.init();
    });

    afterEach(() => {
        fixture.cleanup();
    });

    it("should start with an empty ID field", () => {
        expect($("#char-id").val()).toBe("");
    });


      describe("API calls", () => {
          var request;

          beforeEach(() => {
              jasmine.Ajax.install();

              $("#char-id").val("5208303768436736");
              $("#delchar-button").click();

              request = jasmine.Ajax.requests.mostRecent();
          });

          afterEach(() => {
              jasmine.Ajax.uninstall();
          });

          it("should trigger a request to specified url", () => {
              expect(request.url).toBe("http://lmu-diabolical.appspot.com/characters/5208303768436736");
          });
                  // We can go even further by examining the resulting element(s) and expecting their content to match the
                  // mock response, but we will leave this as "further work" for now.
      });

});
