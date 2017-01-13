describe("slider jQuery plugin", () => {
    let options = {
        change: function () {
            // No-op; Jasmine spy will check on whether this got called.
        }
    };

    beforeEach(() => {
        fixture.setBase("test");
        fixture.load("jquery.slider.fixture.html");
    });

    afterEach(() => fixture.cleanup());

    it("should return itself when the plugin is installed", () => {
        let $target = $(".handle");
        let $pluginResult = $target.slider(options);
        expect($pluginResult).toBe($target);
    });

    describe("installed behavior", () => {

        beforeEach(() => $(".handle").slider(options));

        it("should update the slider position correctly", () => {
            let mousedown = $.Event("mousedown", { pageX: 20 });
            $(".handle").trigger(mousedown);

            let mousemove = $.Event("mousemove", { pageX: 30 });
            $(".handle").trigger(mousemove);
            // expect($(".handle").data.toBe(10));

            mousemove = $.Event("mousemove", { pageX: 30 });
            $(".slider-test").trigger(mousemove);
            // expect($(".handle").data('slider-angle')).toBe(10);
        });

        it("should invoke the callback correctly", () => {
            spyOn(options, 'change');
            let mousedown = $.Event("mousedown", { pageX: 20 });
            $(".handle").trigger(mousedown);
            // let mousedown = $.Event("mousedown", { pageX: 0 });
            
            let mousemove = $.Event("mousemove", { pageX: 10 });
            $(".handle").trigger(mousemove);
            expect(options.change).toHaveBeenCalled();
            // expect(options.change).toHaveBeenCalledWith(20);

            // mousemove = $.Event("mousemove", { pageX: 30 });
            // $(".handle").trigger(mousemove);
            // expect(options.change).toHaveBeenCalledWith(20);
        });
    });
});
