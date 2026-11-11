/**
 * Extractor function for a private class member name, like `#foo` in `this.#foo`.
 * Parsers use different node types for it:
 * - `PrivateIdentifier` (ESTree, espree, @typescript-eslint/parser v5+): `name` has no `#`
 * - `PrivateName` (Babel without `estree` class features): `id.name` has no `#`
 * - `TSPrivateIdentifier` (@typescript-eslint/parser v4): `name` includes the `#`
 *
 * @param - value - AST Value object with one of the types above
 * @returns - The private name as a string, like '#foo'.
 */
export default function extractValueFromPrivateIdentifier(value) {
  const name = value.id ? value.id.name : value.name;
  return name.charAt(0) === '#' ? name : `#${name}`;
}
