import copy from "copy-to-clipboard";
import { jsonSchemaToZodDereffed } from "json-schema-to-zod";
import json5 from "json5";
import React, { useEffect, useState } from "react";

export const JsonSchemaToZod = () => {
  const [json, setJson] = useState("{}");
  const [zod, setZod] = useState("");
  const [errors, setErrors] = useState("");
  const [name, setName] = useState("");
  const [module, setModule] = useState(true);

  useEffect(() => {
    try {
      const parsed = json5.parse(json);
      setErrors("");
      jsonSchemaToZodDereffed(parsed as any, name, module)
        .then((x) => {
          console.log(x);
          setZod(x);
        })
        .catch((e) => setErrors(`Errors:\n${e}`));
    } catch (e) {
      setErrors(`Errors:\n${e}`);
    }
  }, [json, name, module]);

  const format = () => {
    try {
      setJson(JSON.stringify(json5.parse(json), null, 2));
    } catch (e) {
      setErrors(`Errors:\n${e}`);
    }
  };

  return (
    <>
      <h1>Json Schema To Zod</h1>
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: 10,
            padding: 10,
            border: "1px solid grey",
          }}
        >
          <b>Schema name</b>
          <input value={name} onChange={(e) => setName(e.target.value)}></input>
          <b>Module</b>
          <input
            type="checkbox"
            checked={module}
            onChange={(e) => setModule(e.target.checked)}
          ></input>
          <b>Json Schema</b>
          <textarea
            style={{ width: 400, height: 400 }}
            value={json}
            onChange={(e) => setJson(e.target.value)}
          ></textarea>
          <button
            style={{ width: "100%" }}
            disabled={!!errors}
            onClick={() => format()}
          >
            Format
          </button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: 10,
            padding: 10,
            border: "1px solid grey",
          }}
        >
          <b>Result</b>
          <textarea
            style={{
              width: 400,
              height: 476,
              color: errors ? "red" : "black",
            }}
            value={errors || zod}
            // @ts-expect-error
            onClick={(e) => e.target.select()}
          ></textarea>
          <button
            style={{ width: "100%" }}
            disabled={!!errors}
            onClick={() => copy(zod)}
          >
            Copy
          </button>
        </div>
      </div>
      <a href="https://www.npmjs.com/package/json-schema-to-zod">
        Get the CLI NPM package here
      </a>
      <br />
      <a href="https://www.github.com/stefanTerdell/json-schema-to-zod">
        Something borken? Please log an issue here
      </a>
    </>
  );
};
