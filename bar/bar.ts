import type { Foo } from "../foo/foo";

function check(key: keyof Foo) {
  return;
}

check("key1");
check("key2");
check("key3"); // should fail type check
