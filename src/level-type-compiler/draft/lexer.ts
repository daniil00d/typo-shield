import { Trim } from "@core/utils/string";

type DetectiveDirective<DSL extends string> =
  DSL extends `${string}@${infer DirectiveName extends string} ${infer Cnt extends string};${infer Tail extends string}`
    ? {
        name: DirectiveName;
        cnt: Cnt;
        tail: Tail;
      }
    : {
        name: "";
        cnt: "";
        tail: "";
      };

type DirectiveTreeType = {
  name: string;
  cnt: string;
  subtree?: DirectiveTreeType;
};

type DirectiveTree<DSL extends string, Acc extends DirectiveTreeType> = DetectiveDirective<DSL>["name"] extends ""
  ? undefined
  : {
      name: DetectiveDirective<DSL>["name"];
      cnt: DetectiveDirective<DSL>["cnt"];
      subtree: DirectiveTree<DetectiveDirective<DSL>["tail"], Acc>;
    };

type DSL = `
HTTP: {
  $GET: {
    > user: {
    @body JSON {a: Number, b: String};
      > list: {
        /// yes, you can write like that
        @body 
          JSON {
            g: Number, 
            x: String
          };
        @body JSON {c: Number, d: String};
        > get_1: {
          @body JSON {s: Number, p: String};
          @body JSON #exclude(c, p);
          > smt: {
            @body JSON {e: Number, f: String};
            > last_1: {
              @body JSON #include(s, a);
              @serve GetUser;
            };
            > last_2: {
              @body JSON #include(s, a);
              @serve GetUserList;
            };
          };
        };
      };
      > get: {
        @serve GetUser;
      };
    };
  };
};
`;

type directive = DetectiveDirective<DSL>;

type tree = DirectiveTree<
  DSL,
  { name: ""; cnt: "" }
>["subtree"]["subtree"]["subtree"]["subtree"]["subtree"]["subtree"]["subtree"];

type DirTreeType = {
  directives: {
    name: string;
    cnt: string;
  }[];
  subDirectives: DirTreeType;
};

// type DirTree<DSL extends string, Acc extends DirTreeType> = DSL extends `${infer Last extends string}@serve ${infer Cnt extends string};`
//   ? {
//     directives: []
//   }
