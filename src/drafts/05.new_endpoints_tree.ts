/**
 * Здесь попытаемся изобразить дерево эндоинтов
 *
 * пример: https://www.figma.com/file/gWHXjMmw5dDiwiXliDPZok/SEW---Endpoints-description?type=whiteboard&node-id=0%3A1&t=y2uUGpCY3Nh2WHcS-1
 */

type ETreeSchema = string;
// for def
function mergeEndpointTreeSchema(
  root: ETreeSchema,
  childTrees?: Record<string, ETreeSchema>
) {}

// для будущего парсинга нужно обозначить с помощью префикса для названия описания эндпоинта -> et_{smt}
const et_BaseUserTree = `
  |> HTTP/2
    <|> POST
      <|> user
        <|> consumer
        <|> admin
        <|> manager
    <|> GET
      :> user
        <|> list
        <|> @param 'login' as String
          :> get
` as const;

// or separated by logical subtrees
const et_BasePOSTUserTree = `
  @snippet UserPost
  |> POST
    <|> user
      <|> consumer
      <|> admin
      <|> manager
` as const;

const et_BaseGETUserTree = `
  @snippet UserGet
  |> GET
    :> user
      <|> list
      <|> @param 'login' as String
        :> get
` as const;

const et_BaseRootUserTree = `
  |> HTTP/2
    <|> @import UserPost
    <|> @import UserGet
` as const;

const et_schema = mergeEndpointTreeSchema(et_BaseRootUserTree, {
  et_BasePOSTUserTree,
  et_BaseGETUserTree,
}); // должно отдавать тоже самое, что и для "et_BaseUserTree"
