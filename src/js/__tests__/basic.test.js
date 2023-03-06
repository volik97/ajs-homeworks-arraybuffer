import getBuffer from "../getBuffer";
import ArrayBufferConverter from "../app";

test("load() принимает buffer и сохраняет его в arrayBuffer", () => {
  const arrayBuffer = new ArrayBufferConverter();
  const buffer = getBuffer();
  arrayBuffer.load(buffer);
  expect(arrayBuffer.bufferContainer).toBeInstanceOf(Uint16Array);
});

test("toString() корректно раскодирует переданные данные", () => {
  const dataStr = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const arrayBuffer = new ArrayBufferConverter();
  const buffer = getBuffer();
  arrayBuffer.load(buffer);
  expect(arrayBuffer.toString()).toBe(dataStr);
});