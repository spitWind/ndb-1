describe("Node Debugger", function() {
  describe("version", function() {
    it("should be at 0.1.3", function() {
      ndb.version.should.equal("0.1.4");
    });
  });

  it("should have verbose off by default", function() {
    ndb.reset();
    ndb.verbose.should.equal(false);
  });

  it("should have the host set to 127.0.0.1 by default", function() {
    ndb.host.should.equal("127.0.0.1");
  });

  it("should have the default port as 5858", function() {
    ndb.port.should.equal(5858);
  });
});
