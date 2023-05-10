export function getConf() {
  return {
    name: "my conf",
    x: 123,
    ready: true
  };
}

const conf = getConf();
console.info(conf.name);
