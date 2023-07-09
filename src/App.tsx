import copy from "copy-to-clipboard";
import { jsonSchemaToZodDereffed } from "json-schema-to-zod";
import { version } from "json-schema-to-zod/package.json";
import json5 from "json5";
import React, { useEffect, useState } from "react";

export const JsonSchemaToZod = () => {
  const [json, setJson] = useState("{}");
  const [zod, setZod] = useState("");
  const [errors, setErrors] = useState("");
  const [name, setName] = useState("");
  const [module, setModule] = useState("esm");
  const [rc, setRc] = useState(0);

  useEffect(() => {
    try {
      const parsed = json5.parse(json);
      setErrors("");
      jsonSchemaToZodDereffed(parsed as any, {
        name,
        module: module === "esm" || module === "cjs" ? module : false,
        recursionDepth: rc,
      })
        .then((x) => {
          console.log(x);
          setZod(x);
        })
        .catch((e) => setErrors(`Errors:\n${e}`));
    } catch (e) {
      setErrors(`Errors:\n${e}`);
    }
  }, [json, name, module, rc]);

  const format = () => {
    try {
      setJson(JSON.stringify(json5.parse(json), null, 2));
    } catch (e) {
      setErrors(`Errors:\n${e}`);
    }
  };

  return (
    <>
      <h1>Json Schema To Zod {version}</h1>
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
          <select value={module} onChange={(e) => setModule(e.target.value)}>
            <option>esm</option>
            <option>cjs</option>
            <option>none</option>
          </select>
          <b>Recursion depth</b>
          <input
            type="number"
            step={1}
            min={0}
            value={rc}
            onChange={(e) => {
              const rc = Number(e.target.value);
              if (!isNaN(rc) && rc >= 0) {
                setRc(Math.round(rc));
              }
            }}
          />
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
              height: 522,
              color: errors ? "red" : "black",
            }}
            value={errors || zod}
            // @ts-expect-error
            onClick={(e) => e.target.select?.()}
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
        Log an issue, open a feature PR or just leave a ⭐ here ^^
      </a>
    </>
  );
};
