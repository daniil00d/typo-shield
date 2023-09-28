const newSyntax = `
HTTP: {
  $GET: {
    > user: {
    @input JSON {a: Number, b: String};
      > list: {
        @serve GetUserList;
      };
      > get: {
        @serve GetUser;
      };
    };
  };
};
`;
