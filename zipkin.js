import { BatchRecorder, Tracer, ConsoleRecorder, jsonEncoder } from 'zipkin';
import { HttpLogger } from 'zipkin-transport-http';
import CLSContext from 'zipkin-context-cls';
import { expressMiddleware } from 'zipkin-instrumentation-express';

const ZIPKIN_SPANS_ENDPOINT = process.env.ZIPKIN_SPANS_ENDPOINT;
const ctxImpl = new CLSContext();

if (ZIPKIN_SPANS_ENDPOINT === undefined) {
  throw new Error('ZIPKIN_SPANS_ENDPOINT has not been defined');
}

const recorder = new BatchRecorder({
  logger: new HttpLogger({
    endpoint: ZIPKIN_SPANS_ENDPOINT,
    jsonEncoder: jsonEncoder.JSON_V2,
    httpInterval: 3000,
    fetchImplementation
  })
});

const localServiceName = 'my-app';
const tracer = new Tracer({ ctxImpl, recorder, localServiceName });
const tracingMiddleware = expressMiddleware({ tracer });

export { tracingMiddleware as default, tracer };
