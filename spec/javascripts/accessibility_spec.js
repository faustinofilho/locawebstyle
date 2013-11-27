describe("Accessibility", function() {
  beforeEach(function() {
    loadFixtures('accessibility_fixture.html');
    locastyle.accessibility.init();
  });

  describe("DOM manipulation", function () {
    it("should prepend defined html on .header if .title-content exists", function(){
      expect($('.area-access')).toExist();
    });
    it("should prepend defined html on .header if attr data-access exists", function(){
      expect($('.menu-access')).toExist();
    });
    it("should prepend defined html on .menu if submenu exists", function(){
      expect($('.menu li').find('ul')).toHaveClass('submenu');
    });
    it("should defined links of menu if contain attr role menuitem", function(){
      expect($('.menu')).toContain('a[role="menuitem"]');
    });
  });
  describe("Submenu Access", function(){
    describe("when focus on .menu a", function(){
      it("should add .in class on parent li", function(){
        $('#submenu_test').trigger('focus');
        expect($('#submenu_parent')).toHaveClass('in');
      });
      it("should change aria-expanded attr to true", function(){
        $('#submenu_test').trigger('focus');
        expect($('#submenu_parent > ul').attr('aria-expanded')).toEqual('true');
      });
      it("should change aria-hidden attr to false", function(){
        $('#submenu_test').trigger('focus');
        expect($('#submenu_parent > ul').attr('aria-hidden')).toEqual('false');
      });
    })
  })
});
