[mongo-baseops](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / WritableBase

# Class: WritableBase

[\<internal\>](../modules/internal_.md).WritableBase

The `EventEmitter` class is defined and exposed by the `node:events` module:

```js
import { EventEmitter } from 'node:events';
```

All `EventEmitter`s emit the event `'newListener'` when new listeners are
added and `'removeListener'` when existing listeners are removed.

It supports the following option:

**`Since`**

v0.1.26

## Hierarchy

- [`Stream`](internal_.Stream.md)

  ↳ **`WritableBase`**

  ↳↳ [`Writable`](internal_.Writable.md)

## Implements

- [`WritableStream`](../interfaces/internal_.WritableStream.md)

## Implemented by

- [`Duplex`](internal_.Duplex.md)

## Table of contents

### Constructors

- [constructor](internal_.WritableBase.md#constructor)

### Properties

- [closed](internal_.WritableBase.md#closed)
- [destroyed](internal_.WritableBase.md#destroyed)
- [errored](internal_.WritableBase.md#errored)
- [writable](internal_.WritableBase.md#writable)
- [writableCorked](internal_.WritableBase.md#writablecorked)
- [writableEnded](internal_.WritableBase.md#writableended)
- [writableFinished](internal_.WritableBase.md#writablefinished)
- [writableHighWaterMark](internal_.WritableBase.md#writablehighwatermark)
- [writableLength](internal_.WritableBase.md#writablelength)
- [writableNeedDrain](internal_.WritableBase.md#writableneeddrain)
- [writableObjectMode](internal_.WritableBase.md#writableobjectmode)
- [captureRejectionSymbol](internal_.WritableBase.md#capturerejectionsymbol)
- [captureRejections](internal_.WritableBase.md#capturerejections)
- [defaultMaxListeners](internal_.WritableBase.md#defaultmaxlisteners)
- [errorMonitor](internal_.WritableBase.md#errormonitor)

### Methods

- [[captureRejectionSymbol]](internal_.WritableBase.md#[capturerejectionsymbol])
- [\_construct](internal_.WritableBase.md#_construct)
- [\_destroy](internal_.WritableBase.md#_destroy)
- [\_final](internal_.WritableBase.md#_final)
- [\_write](internal_.WritableBase.md#_write)
- [\_writev](internal_.WritableBase.md#_writev)
- [addListener](internal_.WritableBase.md#addlistener)
- [compose](internal_.WritableBase.md#compose)
- [cork](internal_.WritableBase.md#cork)
- [destroy](internal_.WritableBase.md#destroy)
- [emit](internal_.WritableBase.md#emit)
- [end](internal_.WritableBase.md#end)
- [eventNames](internal_.WritableBase.md#eventnames)
- [getMaxListeners](internal_.WritableBase.md#getmaxlisteners)
- [listenerCount](internal_.WritableBase.md#listenercount)
- [listeners](internal_.WritableBase.md#listeners)
- [off](internal_.WritableBase.md#off)
- [on](internal_.WritableBase.md#on)
- [once](internal_.WritableBase.md#once)
- [pipe](internal_.WritableBase.md#pipe)
- [prependListener](internal_.WritableBase.md#prependlistener)
- [prependOnceListener](internal_.WritableBase.md#prependoncelistener)
- [rawListeners](internal_.WritableBase.md#rawlisteners)
- [removeAllListeners](internal_.WritableBase.md#removealllisteners)
- [removeListener](internal_.WritableBase.md#removelistener)
- [setDefaultEncoding](internal_.WritableBase.md#setdefaultencoding)
- [setMaxListeners](internal_.WritableBase.md#setmaxlisteners)
- [uncork](internal_.WritableBase.md#uncork)
- [write](internal_.WritableBase.md#write)
- [addAbortListener](internal_.WritableBase.md#addabortlistener)
- [getEventListeners](internal_.WritableBase.md#geteventlisteners)
- [getMaxListeners](internal_.WritableBase.md#getmaxlisteners-1)
- [listenerCount](internal_.WritableBase.md#listenercount-1)
- [on](internal_.WritableBase.md#on-1)
- [once](internal_.WritableBase.md#once-1)
- [setMaxListeners](internal_.WritableBase.md#setmaxlisteners-1)

## Constructors

### constructor

• **new WritableBase**(`opts?`): [`WritableBase`](internal_.WritableBase.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`WritableOptions`](../interfaces/internal_.WritableOptions.md) |

#### Returns

[`WritableBase`](internal_.WritableBase.md)

#### Overrides

[Stream](internal_.Stream.md).[constructor](internal_.Stream.md#constructor)

#### Defined in

node_modules/@types/node/stream.d.ts:715

## Properties

### closed

• `Readonly` **closed**: `boolean`

Is `true` after `'close'` has been emitted.

**`Since`**

v18.0.0

#### Defined in

node_modules/@types/node/stream.d.ts:704

___

### destroyed

• **destroyed**: `boolean`

Is `true` after `writable.destroy()` has been called.

**`Since`**

v8.0.0

#### Defined in

node_modules/@types/node/stream.d.ts:699

___

### errored

• `Readonly` **errored**: ``null`` \| [`Error`](../interfaces/internal_.Error.md)

Returns error if the stream has been destroyed with an error.

**`Since`**

v18.0.0

#### Defined in

node_modules/@types/node/stream.d.ts:709

___

### writable

• `Readonly` **writable**: `boolean`

Is `true` if it is safe to call `writable.write()`, which means
the stream has not been destroyed, errored, or ended.

**`Since`**

v11.4.0

#### Implementation of

[WritableStream](../interfaces/internal_.WritableStream.md).[writable](../interfaces/internal_.WritableStream.md#writable)

#### Defined in

node_modules/@types/node/stream.d.ts:660

___

### writableCorked

• `Readonly` **writableCorked**: `number`

Number of times `writable.uncork()` needs to be
called in order to fully uncork the stream.

**`Since`**

v13.2.0, v12.16.0

#### Defined in

node_modules/@types/node/stream.d.ts:694

___

### writableEnded

• `Readonly` **writableEnded**: `boolean`

Is `true` after `writable.end()` has been called. This property
does not indicate whether the data has been flushed, for this use `writable.writableFinished` instead.

**`Since`**

v12.9.0

#### Defined in

node_modules/@types/node/stream.d.ts:666

___

### writableFinished

• `Readonly` **writableFinished**: `boolean`

Is set to `true` immediately before the `'finish'` event is emitted.

**`Since`**

v12.6.0

#### Defined in

node_modules/@types/node/stream.d.ts:671

___

### writableHighWaterMark

• `Readonly` **writableHighWaterMark**: `number`

Return the value of `highWaterMark` passed when creating this `Writable`.

**`Since`**

v9.3.0

#### Defined in

node_modules/@types/node/stream.d.ts:676

___

### writableLength

• `Readonly` **writableLength**: `number`

This property contains the number of bytes (or objects) in the queue
ready to be written. The value provides introspection data regarding
the status of the `highWaterMark`.

**`Since`**

v9.4.0

#### Defined in

node_modules/@types/node/stream.d.ts:683

___

### writableNeedDrain

• `Readonly` **writableNeedDrain**: `boolean`

Is `true` if the stream's buffer has been full and stream will emit `'drain'`.

**`Since`**

v15.2.0, v14.17.0

#### Defined in

node_modules/@types/node/stream.d.ts:714

___

### writableObjectMode

• `Readonly` **writableObjectMode**: `boolean`

Getter for the property `objectMode` of a given `Writable` stream.

**`Since`**

v12.3.0

#### Defined in

node_modules/@types/node/stream.d.ts:688

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](internal_.EventEmitter-1.md#capturerejectionsymbol)

Value: `Symbol.for('nodejs.rejection')`

See how to write a custom `rejection handler`.

**`Since`**

v13.4.0, v12.16.0

#### Inherited from

[Stream](internal_.Stream.md).[captureRejectionSymbol](internal_.Stream.md#capturerejectionsymbol)

#### Defined in

node_modules/@types/node/events.d.ts:415

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Value: [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)

Change the default `captureRejections` option on all new `EventEmitter` objects.

**`Since`**

v13.4.0, v12.16.0

#### Inherited from

[Stream](internal_.Stream.md).[captureRejections](internal_.Stream.md#capturerejections)

#### Defined in

node_modules/@types/node/events.d.ts:422

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

By default, a maximum of `10` listeners can be registered for any single
event. This limit can be changed for individual `EventEmitter` instances
using the `emitter.setMaxListeners(n)` method. To change the default
for _all_`EventEmitter` instances, the `events.defaultMaxListeners`property can be used. If this value is not a positive number, a `RangeError`is thrown.

Take caution when setting the `events.defaultMaxListeners` because the
change affects _all_`EventEmitter` instances, including those created before
the change is made. However, calling `emitter.setMaxListeners(n)` still has
precedence over `events.defaultMaxListeners`.

This is not a hard limit. The `EventEmitter` instance will allow
more listeners to be added but will output a trace warning to stderr indicating
that a "possible EventEmitter memory leak" has been detected. For any single`EventEmitter`, the `emitter.getMaxListeners()` and `emitter.setMaxListeners()`methods can be used to
temporarily avoid this warning:

```js
import { EventEmitter } from 'node:events';
const emitter = new EventEmitter();
emitter.setMaxListeners(emitter.getMaxListeners() + 1);
emitter.once('event', () => {
  // do stuff
  emitter.setMaxListeners(Math.max(emitter.getMaxListeners() - 1, 0));
});
```

The `--trace-warnings` command-line flag can be used to display the
stack trace for such warnings.

The emitted warning can be inspected with `process.on('warning')` and will
have the additional `emitter`, `type`, and `count` properties, referring to
the event emitter instance, the event's name and the number of attached
listeners, respectively.
Its `name` property is set to `'MaxListenersExceededWarning'`.

**`Since`**

v0.11.2

#### Inherited from

[Stream](internal_.Stream.md).[defaultMaxListeners](internal_.Stream.md#defaultmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:459

___

### errorMonitor

▪ `Static` `Readonly` **errorMonitor**: typeof [`errorMonitor`](internal_.EventEmitter-1.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`events. Listeners installed using this symbol are called before the regular`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an`'error'` event is emitted. Therefore, the process will still crash if no
regular `'error'` listener is installed.

**`Since`**

v13.6.0, v12.17.0

#### Inherited from

[Stream](internal_.Stream.md).[errorMonitor](internal_.Stream.md#errormonitor)

#### Defined in

node_modules/@types/node/events.d.ts:408

## Methods

### [captureRejectionSymbol]

▸ **[captureRejectionSymbol]**\<`K`\>(`error`, `event`, `...args`): `void`

#### Type parameters

| Name |
| :------ |
| `K` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | [`Error`](../interfaces/internal_.Error.md) |
| `event` | `string` \| `symbol` |
| `...args` | [`AnyRest`](../modules/internal_.md#anyrest) |

#### Returns

`void`

#### Implementation of

[WritableStream](../interfaces/internal_.WritableStream.md).[[captureRejectionSymbol]](../interfaces/internal_.WritableStream.md#[capturerejectionsymbol])

#### Inherited from

[Stream](internal_.Stream.md).[[captureRejectionSymbol]](internal_.Stream.md#[capturerejectionsymbol])

#### Defined in

node_modules/@types/node/events.d.ts:125

___

### \_construct

▸ **_construct**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`error?`: ``null`` \| [`Error`](../interfaces/internal_.Error.md)) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/stream.d.ts:724

___

### \_destroy

▸ **_destroy**(`error`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | ``null`` \| [`Error`](../interfaces/internal_.Error.md) |
| `callback` | (`error?`: ``null`` \| [`Error`](../interfaces/internal_.Error.md)) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/stream.d.ts:725

___

### \_final

▸ **_final**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`error?`: ``null`` \| [`Error`](../interfaces/internal_.Error.md)) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/stream.d.ts:726

___

### \_write

▸ **_write**(`chunk`, `encoding`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `encoding` | [`BufferEncoding`](../modules/internal_.md#bufferencoding) |
| `callback` | (`error?`: ``null`` \| [`Error`](../interfaces/internal_.Error.md)) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/stream.d.ts:716

___

### \_writev

▸ **_writev**(`chunks`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunks` | \{ `chunk`: `any` ; `encoding`: [`BufferEncoding`](../modules/internal_.md#bufferencoding)  }[] |
| `callback` | (`error?`: ``null`` \| [`Error`](../interfaces/internal_.Error.md)) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/stream.d.ts:717

___

### addListener

▸ **addListener**(`event`, `listener`): `this`

Event emitter
The defined events on documents including:
1. close
2. drain
3. error
4. finish
5. pipe
6. unpipe

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

`this`

#### Implementation of

[WritableStream](../interfaces/internal_.WritableStream.md).[addListener](../interfaces/internal_.WritableStream.md#addlistener)

#### Overrides

[Stream](internal_.Stream.md).[addListener](internal_.Stream.md#addlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:892

▸ **addListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

`this`

#### Implementation of

NodeJS.WritableStream.addListener

#### Overrides

Stream.addListener

#### Defined in

node_modules/@types/node/stream.d.ts:893

▸ **addListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: [`Error`](../interfaces/internal_.Error.md)) => `void` |

#### Returns

`this`

#### Implementation of

NodeJS.WritableStream.addListener

#### Overrides

Stream.addListener

#### Defined in

node_modules/@types/node/stream.d.ts:894

▸ **addListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

`this`

#### Implementation of

NodeJS.WritableStream.addListener

#### Overrides

Stream.addListener

#### Defined in

node_modules/@types/node/stream.d.ts:895

▸ **addListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: [`Readable`](internal_.Readable.md)) => `void` |

#### Returns

`this`

#### Implementation of

NodeJS.WritableStream.addListener

#### Overrides

Stream.addListener

#### Defined in

node_modules/@types/node/stream.d.ts:896

▸ **addListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: [`Readable`](internal_.Readable.md)) => `void` |

#### Returns

`this`

#### Implementation of

NodeJS.WritableStream.addListener

#### Overrides

Stream.addListener

#### Defined in

node_modules/@types/node/stream.d.ts:897

▸ **addListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

`this`

#### Implementation of

NodeJS.WritableStream.addListener

#### Overrides

Stream.addListener

#### Defined in

node_modules/@types/node/stream.d.ts:898

___

### compose

▸ **compose**\<`T`\>(`stream`, `options?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ReadableStream`](../interfaces/internal_.ReadableStream-1.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | [`ComposeFnParam`](../modules/internal_.md#composefnparam) \| `T` \| [`Iterable`](../interfaces/internal_.Iterable.md)\<`T`\> \| [`AsyncIterable`](../interfaces/internal_.AsyncIterable.md)\<`T`\> |
| `options?` | `Object` |
| `options.signal` | `AbortSignal` |

#### Returns

`T`

#### Inherited from

[Stream](internal_.Stream.md).[compose](internal_.Stream.md#compose)

#### Defined in

node_modules/@types/node/stream.d.ts:35

___

### cork

▸ **cork**(): `void`

The `writable.cork()` method forces all written data to be buffered in memory.
The buffered data will be flushed when either the [uncork](internal_.WritableBase.md#uncork) or [end](internal_.WritableBase.md#end) methods are called.

The primary intent of `writable.cork()` is to accommodate a situation in which
several small chunks are written to the stream in rapid succession. Instead of
immediately forwarding them to the underlying destination, `writable.cork()`buffers all the chunks until `writable.uncork()` is called, which will pass them
all to `writable._writev()`, if present. This prevents a head-of-line blocking
situation where data is being buffered while waiting for the first small chunk
to be processed. However, use of `writable.cork()` without implementing`writable._writev()` may have an adverse effect on throughput.

See also: `writable.uncork()`, `writable._writev()`.

#### Returns

`void`

**`Since`**

v0.11.2

#### Defined in

node_modules/@types/node/stream.d.ts:830

___

### destroy

▸ **destroy**(`error?`): `this`

Destroy the stream. Optionally emit an `'error'` event, and emit a `'close'`event (unless `emitClose` is set to `false`). After this call, the writable
stream has ended and subsequent calls to `write()` or `end()` will result in
an `ERR_STREAM_DESTROYED` error.
This is a destructive and immediate way to destroy a stream. Previous calls to`write()` may not have drained, and may trigger an `ERR_STREAM_DESTROYED` error.
Use `end()` instead of destroy if data should flush before close, or wait for
the `'drain'` event before destroying the stream.

Once `destroy()` has been called any further calls will be a no-op and no
further errors except from `_destroy()` may be emitted as `'error'`.

Implementors should not override this method,
but instead implement `writable._destroy()`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error?` | [`Error`](../interfaces/internal_.Error.md) | Optional, an error to emit with `'error'` event. |

#### Returns

`this`

**`Since`**

v8.0.0

#### Defined in

node_modules/@types/node/stream.d.ts:881

___

### emit

▸ **emit**(`event`): `boolean`

Synchronously calls each of the listeners registered for the event named`eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
import { EventEmitter } from 'node:events';
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |

#### Returns

`boolean`

**`Since`**

v0.1.26

#### Implementation of

[WritableStream](../interfaces/internal_.WritableStream.md).[emit](../interfaces/internal_.WritableStream.md#emit)

#### Overrides

[Stream](internal_.Stream.md).[emit](internal_.Stream.md#emit)

#### Defined in

node_modules/@types/node/stream.d.ts:899

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |

#### Returns

`boolean`

#### Implementation of

NodeJS.WritableStream.emit

#### Overrides

Stream.emit

#### Defined in

node_modules/@types/node/stream.d.ts:900

▸ **emit**(`event`, `err`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `err` | [`Error`](../interfaces/internal_.Error.md) |

#### Returns

`boolean`

#### Implementation of

NodeJS.WritableStream.emit

#### Overrides

Stream.emit

#### Defined in

node_modules/@types/node/stream.d.ts:901

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |

#### Returns

`boolean`

#### Implementation of

NodeJS.WritableStream.emit

#### Overrides

Stream.emit

#### Defined in

node_modules/@types/node/stream.d.ts:902

▸ **emit**(`event`, `src`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `src` | [`Readable`](internal_.Readable.md) |

#### Returns

`boolean`

#### Implementation of

NodeJS.WritableStream.emit

#### Overrides

Stream.emit

#### Defined in

node_modules/@types/node/stream.d.ts:903

▸ **emit**(`event`, `src`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `src` | [`Readable`](internal_.Readable.md) |

#### Returns

`boolean`

#### Implementation of

NodeJS.WritableStream.emit

#### Overrides

Stream.emit

#### Defined in

node_modules/@types/node/stream.d.ts:904

▸ **emit**(`event`, `...args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Implementation of

NodeJS.WritableStream.emit

#### Overrides

Stream.emit

#### Defined in

node_modules/@types/node/stream.d.ts:905

___

### end

▸ **end**(`cb?`): `this`

Calling the `writable.end()` method signals that no more data will be written
to the `Writable`. The optional `chunk` and `encoding` arguments allow one
final additional chunk of data to be written immediately before closing the
stream.

Calling the [write](internal_.WritableBase.md#write) method after calling [end](internal_.WritableBase.md#end) will raise an error.

```js
// Write 'hello, ' and then end with 'world!'.
const fs = require('node:fs');
const file = fs.createWriteStream('example.txt');
file.write('hello, ');
file.end('world!');
// Writing more now is not allowed!
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb?` | () => `void` |

#### Returns

`this`

**`Since`**

v0.9.4

#### Implementation of

[WritableStream](../interfaces/internal_.WritableStream.md).[end](../interfaces/internal_.WritableStream.md#end)

#### Defined in

node_modules/@types/node/stream.d.ts:813

▸ **end**(`chunk`, `cb?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `cb?` | () => `void` |

#### Returns

`this`

#### Implementation of

[WritableStream](../interfaces/internal_.WritableStream.md).[end](../interfaces/internal_.WritableStream.md#end)

#### Defined in

node_modules/@types/node/stream.d.ts:814

▸ **end**(`chunk`, `encoding`, `cb?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `encoding` | [`BufferEncoding`](../modules/internal_.md#bufferencoding) |
| `cb?` | () => `void` |

#### Returns

`this`

#### Implementation of

[WritableStream](../interfaces/internal_.WritableStream.md).[end](../interfaces/internal_.WritableStream.md#end)

#### Defined in

node_modules/@types/node/stream.d.ts:815

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
import { EventEmitter } from 'node:events';

const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

#### Returns

(`string` \| `symbol`)[]

**`Since`**

v6.0.0

#### Implementation of

[WritableStream](../interfaces/internal_.WritableStream.md).[eventNames](../interfaces/internal_.WritableStream.md#eventnames)

#### Inherited from

[Stream](internal_.Stream.md).[eventNames](internal_.Stream.md#eventnames)

#### Defined in

node_modules/@types/node/events.d.ts:883

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](internal_.WritableBase.md#defaultmaxlisteners).

#### Returns

`number`

**`Since`**

v1.0.0

#### Implementation of

[WritableStream](../interfaces/internal_.WritableStream.md).[getMaxListeners](../interfaces/internal_.WritableStream.md#getmaxlisteners)

#### Inherited from

[Stream](internal_.Stream.md).[getMaxListeners](internal_.Stream.md#getmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:735

___

### listenerCount

▸ **listenerCount**\<`K`\>(`eventName`, `listener?`): `number`

Returns the number of listeners listening for the event named `eventName`.
If `listener` is provided, it will return how many times the listener is found
in the list of the listeners of the event.

#### Type parameters

| Name |
| :------ |
| `K` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event being listened for |
| `listener?` | `Function` | The event handler function |

#### Returns

`number`

**`Since`**

v3.2.0

#### Implementation of

[WritableStream](../interfaces/internal_.WritableStream.md).[listenerCount](../interfaces/internal_.WritableStream.md#listenercount)

#### Inherited from

[Stream](internal_.Stream.md).[listenerCount](internal_.Stream.md#listenercount)

#### Defined in

node_modules/@types/node/events.d.ts:829

___

### listeners

▸ **listeners**\<`K`\>(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

#### Type parameters

| Name |
| :------ |
| `K` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

**`Since`**

v0.1.26

#### Implementation of

[WritableStream](../interfaces/internal_.WritableStream.md).[listeners](../interfaces/internal_.WritableStream.md#listeners)

#### Inherited from

[Stream](internal_.Stream.md).[listeners](internal_.Stream.md#listeners)

#### Defined in

node_modules/@types/node/events.d.ts:748

___

### off

▸ **off**\<`K`\>(`eventName`, `listener`): `this`

Alias for `emitter.removeListener()`.

#### Type parameters

| Name |
| :------ |
| `K` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

`this`

**`Since`**

v10.0.0

#### Implementation of

[WritableStream](../interfaces/internal_.WritableStream.md).[off](../interfaces/internal_.WritableStream.md#off)

#### Inherited from

[Stream](internal_.Stream.md).[off](internal_.Stream.md#off)

#### Defined in

node_modules/@types/node/events.d.ts:708

___

### on

▸ **on**(`event`, `listener`): `this`

Adds the `listener` function to the end of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | ``"close"`` | The name of the event. |
| `listener` | () => `void` | The callback function |

#### Returns

`this`

**`Since`**

v0.1.101

#### Implementation of

[WritableStream](../interfaces/internal_.WritableStream.md).[on](../interfaces/internal_.WritableStream.md#on)

#### Overrides

[Stream](internal_.Stream.md).[on](internal_.Stream.md#on)

#### Defined in

node_modules/@types/node/stream.d.ts:906

▸ **on**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

`this`

#### Implementation of

NodeJS.WritableStream.on

#### Overrides

Stream.on

#### Defined in

node_modules/@types/node/stream.d.ts:907

▸ **on**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: [`Error`](../interfaces/internal_.Error.md)) => `void` |

#### Returns

`this`

#### Implementation of

NodeJS.WritableStream.on

#### Overrides

Stream.on

#### Defined in

node_modules/@types/node/stream.d.ts:908

▸ **on**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

`this`

#### Implementation of

NodeJS.WritableStream.on

#### Overrides

Stream.on

#### Defined in

node_modules/@types/node/stream.d.ts:909

▸ **on**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: [`Readable`](internal_.Readable.md)) => `void` |

#### Returns

`this`

#### Implementation of

NodeJS.WritableStream.on

#### Overrides

Stream.on

#### Defined in

node_modules/@types/node/stream.d.ts:910

▸ **on**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: [`Readable`](internal_.Readable.md)) => `void` |

#### Returns

`this`

#### Implementation of

NodeJS.WritableStream.on

#### Overrides

Stream.on

#### Defined in

node_modules/@types/node/stream.d.ts:911

▸ **on**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

`this`

#### Implementation of

NodeJS.WritableStream.on

#### Overrides

Stream.on

#### Defined in

node_modules/@types/node/stream.d.ts:912

___

### once

▸ **once**(`event`, `listener`): `this`

Adds a **one-time**`listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | ``"close"`` | The name of the event. |
| `listener` | () => `void` | The callback function |

#### Returns

`this`

**`Since`**

v0.3.0

#### Implementation of

[WritableStream](../interfaces/internal_.WritableStream.md).[once](../interfaces/internal_.WritableStream.md#once)

#### Overrides

[Stream](internal_.Stream.md).[once](internal_.Stream.md#once)

#### Defined in

node_modules/@types/node/stream.d.ts:913

▸ **once**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

`this`

#### Implementation of

NodeJS.WritableStream.once

#### Overrides

Stream.once

#### Defined in

node_modules/@types/node/stream.d.ts:914

▸ **once**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: [`Error`](../interfaces/internal_.Error.md)) => `void` |

#### Returns

`this`

#### Implementation of

NodeJS.WritableStream.once

#### Overrides

Stream.once

#### Defined in

node_modules/@types/node/stream.d.ts:915

▸ **once**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

`this`

#### Implementation of

NodeJS.WritableStream.once

#### Overrides

Stream.once

#### Defined in

node_modules/@types/node/stream.d.ts:916

▸ **once**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: [`Readable`](internal_.Readable.md)) => `void` |

#### Returns

`this`

#### Implementation of

NodeJS.WritableStream.once

#### Overrides

Stream.once

#### Defined in

node_modules/@types/node/stream.d.ts:917

▸ **once**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: [`Readable`](internal_.Readable.md)) => `void` |

#### Returns

`this`

#### Implementation of

NodeJS.WritableStream.once

#### Overrides

Stream.once

#### Defined in

node_modules/@types/node/stream.d.ts:918

▸ **once**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

`this`

#### Implementation of

NodeJS.WritableStream.once

#### Overrides

Stream.once

#### Defined in

node_modules/@types/node/stream.d.ts:919

___

### pipe

▸ **pipe**\<`T`\>(`destination`, `options?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`WritableStream`](../interfaces/internal_.WritableStream.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | `T` |
| `options?` | `Object` |
| `options.end?` | `boolean` |

#### Returns

`T`

#### Inherited from

[Stream](internal_.Stream.md).[pipe](internal_.Stream.md#pipe)

#### Defined in

node_modules/@types/node/stream.d.ts:29

___

### prependListener

▸ **prependListener**(`event`, `listener`): `this`

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | ``"close"`` | The name of the event. |
| `listener` | () => `void` | The callback function |

#### Returns

`this`

**`Since`**

v6.0.0

#### Implementation of

[WritableStream](../interfaces/internal_.WritableStream.md).[prependListener](../interfaces/internal_.WritableStream.md#prependlistener)

#### Overrides

[Stream](internal_.Stream.md).[prependListener](internal_.Stream.md#prependlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:920

▸ **prependListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

`this`

#### Implementation of

NodeJS.WritableStream.prependListener

#### Overrides

Stream.prependListener

#### Defined in

node_modules/@types/node/stream.d.ts:921

▸ **prependListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: [`Error`](../interfaces/internal_.Error.md)) => `void` |

#### Returns

`this`

#### Implementation of

NodeJS.WritableStream.prependListener

#### Overrides

Stream.prependListener

#### Defined in

node_modules/@types/node/stream.d.ts:922

▸ **prependListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

`this`

#### Implementation of

NodeJS.WritableStream.prependListener

#### Overrides

Stream.prependListener

#### Defined in

node_modules/@types/node/stream.d.ts:923

▸ **prependListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: [`Readable`](internal_.Readable.md)) => `void` |

#### Returns

`this`

#### Implementation of

NodeJS.WritableStream.prependListener

#### Overrides

Stream.prependListener

#### Defined in

node_modules/@types/node/stream.d.ts:924

▸ **prependListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: [`Readable`](internal_.Readable.md)) => `void` |

#### Returns

`this`

#### Implementation of

NodeJS.WritableStream.prependListener

#### Overrides

Stream.prependListener

#### Defined in

node_modules/@types/node/stream.d.ts:925

▸ **prependListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

`this`

#### Implementation of

NodeJS.WritableStream.prependListener

#### Overrides

Stream.prependListener

#### Defined in

node_modules/@types/node/stream.d.ts:926

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): `this`

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | ``"close"`` | The name of the event. |
| `listener` | () => `void` | The callback function |

#### Returns

`this`

**`Since`**

v6.0.0

#### Implementation of

[WritableStream](../interfaces/internal_.WritableStream.md).[prependOnceListener](../interfaces/internal_.WritableStream.md#prependoncelistener)

#### Overrides

[Stream](internal_.Stream.md).[prependOnceListener](internal_.Stream.md#prependoncelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:927

▸ **prependOnceListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

`this`

#### Implementation of

NodeJS.WritableStream.prependOnceListener

#### Overrides

Stream.prependOnceListener

#### Defined in

node_modules/@types/node/stream.d.ts:928

▸ **prependOnceListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: [`Error`](../interfaces/internal_.Error.md)) => `void` |

#### Returns

`this`

#### Implementation of

NodeJS.WritableStream.prependOnceListener

#### Overrides

Stream.prependOnceListener

#### Defined in

node_modules/@types/node/stream.d.ts:929

▸ **prependOnceListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

`this`

#### Implementation of

NodeJS.WritableStream.prependOnceListener

#### Overrides

Stream.prependOnceListener

#### Defined in

node_modules/@types/node/stream.d.ts:930

▸ **prependOnceListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: [`Readable`](internal_.Readable.md)) => `void` |

#### Returns

`this`

#### Implementation of

NodeJS.WritableStream.prependOnceListener

#### Overrides

Stream.prependOnceListener

#### Defined in

node_modules/@types/node/stream.d.ts:931

▸ **prependOnceListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: [`Readable`](internal_.Readable.md)) => `void` |

#### Returns

`this`

#### Implementation of

NodeJS.WritableStream.prependOnceListener

#### Overrides

Stream.prependOnceListener

#### Defined in

node_modules/@types/node/stream.d.ts:932

▸ **prependOnceListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

`this`

#### Implementation of

NodeJS.WritableStream.prependOnceListener

#### Overrides

Stream.prependOnceListener

#### Defined in

node_modules/@types/node/stream.d.ts:933

___

### rawListeners

▸ **rawListeners**\<`K`\>(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
import { EventEmitter } from 'node:events';
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

#### Type parameters

| Name |
| :------ |
| `K` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

**`Since`**

v9.4.0

#### Implementation of

[WritableStream](../interfaces/internal_.WritableStream.md).[rawListeners](../interfaces/internal_.WritableStream.md#rawlisteners)

#### Inherited from

[Stream](internal_.Stream.md).[rawListeners](internal_.Stream.md#rawlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:779

___

### removeAllListeners

▸ **removeAllListeners**(`eventName?`): `this`

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` \| `symbol` |

#### Returns

`this`

**`Since`**

v0.1.26

#### Implementation of

[WritableStream](../interfaces/internal_.WritableStream.md).[removeAllListeners](../interfaces/internal_.WritableStream.md#removealllisteners)

#### Inherited from

[Stream](internal_.Stream.md).[removeAllListeners](internal_.Stream.md#removealllisteners)

#### Defined in

node_modules/@types/node/events.d.ts:719

___

### removeListener

▸ **removeListener**(`event`, `listener`): `this`

Removes the specified `listener` from the listener array for the event named`eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any`removeListener()` or `removeAllListeners()` calls _after_ emitting and _before_ the last listener finishes execution
will not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
import { EventEmitter } from 'node:events';
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')`listener is removed:

```js
import { EventEmitter } from 'node:events';
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

`this`

**`Since`**

v0.1.26

#### Implementation of

[WritableStream](../interfaces/internal_.WritableStream.md).[removeListener](../interfaces/internal_.WritableStream.md#removelistener)

#### Overrides

[Stream](internal_.Stream.md).[removeListener](internal_.Stream.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:934

▸ **removeListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

`this`

#### Implementation of

NodeJS.WritableStream.removeListener

#### Overrides

Stream.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:935

▸ **removeListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: [`Error`](../interfaces/internal_.Error.md)) => `void` |

#### Returns

`this`

#### Implementation of

NodeJS.WritableStream.removeListener

#### Overrides

Stream.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:936

▸ **removeListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

`this`

#### Implementation of

NodeJS.WritableStream.removeListener

#### Overrides

Stream.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:937

▸ **removeListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: [`Readable`](internal_.Readable.md)) => `void` |

#### Returns

`this`

#### Implementation of

NodeJS.WritableStream.removeListener

#### Overrides

Stream.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:938

▸ **removeListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: [`Readable`](internal_.Readable.md)) => `void` |

#### Returns

`this`

#### Implementation of

NodeJS.WritableStream.removeListener

#### Overrides

Stream.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:939

▸ **removeListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

`this`

#### Implementation of

NodeJS.WritableStream.removeListener

#### Overrides

Stream.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:940

___

### setDefaultEncoding

▸ **setDefaultEncoding**(`encoding`): `this`

The `writable.setDefaultEncoding()` method sets the default `encoding` for a `Writable` stream.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `encoding` | [`BufferEncoding`](../modules/internal_.md#bufferencoding) | The new default encoding |

#### Returns

`this`

**`Since`**

v0.11.15

#### Defined in

node_modules/@types/node/stream.d.ts:790

___

### setMaxListeners

▸ **setMaxListeners**(`n`): `this`

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

`this`

**`Since`**

v0.3.5

#### Implementation of

[WritableStream](../interfaces/internal_.WritableStream.md).[setMaxListeners](../interfaces/internal_.WritableStream.md#setmaxlisteners)

#### Inherited from

[Stream](internal_.Stream.md).[setMaxListeners](internal_.Stream.md#setmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:729

___

### uncork

▸ **uncork**(): `void`

The `writable.uncork()` method flushes all data buffered since [cork](internal_.WritableBase.md#cork) was called.

When using `writable.cork()` and `writable.uncork()` to manage the buffering
of writes to a stream, defer calls to `writable.uncork()` using`process.nextTick()`. Doing so allows batching of all`writable.write()` calls that occur within a given Node.js event
loop phase.

```js
stream.cork();
stream.write('some ');
stream.write('data ');
process.nextTick(() => stream.uncork());
```

If the `writable.cork()` method is called multiple times on a stream, the
same number of calls to `writable.uncork()` must be called to flush the buffered
data.

```js
stream.cork();
stream.write('some ');
stream.cork();
stream.write('data ');
process.nextTick(() => {
  stream.uncork();
  // The data will not be flushed until uncork() is called a second time.
  stream.uncork();
});
```

See also: `writable.cork()`.

#### Returns

`void`

**`Since`**

v0.11.2

#### Defined in

node_modules/@types/node/stream.d.ts:864

___

### write

▸ **write**(`chunk`, `callback?`): `boolean`

The `writable.write()` method writes some data to the stream, and calls the
supplied `callback` once the data has been fully handled. If an error
occurs, the `callback` will be called with the error as its
first argument. The `callback` is called asynchronously and before `'error'` is
emitted.

The return value is `true` if the internal buffer is less than the`highWaterMark` configured when the stream was created after admitting `chunk`.
If `false` is returned, further attempts to write data to the stream should
stop until the `'drain'` event is emitted.

While a stream is not draining, calls to `write()` will buffer `chunk`, and
return false. Once all currently buffered chunks are drained (accepted for
delivery by the operating system), the `'drain'` event will be emitted.
Once `write()` returns false, do not write more chunks
until the `'drain'` event is emitted. While calling `write()` on a stream that
is not draining is allowed, Node.js will buffer all written chunks until
maximum memory usage occurs, at which point it will abort unconditionally.
Even before it aborts, high memory usage will cause poor garbage collector
performance and high RSS (which is not typically released back to the system,
even after the memory is no longer required). Since TCP sockets may never
drain if the remote peer does not read the data, writing a socket that is
not draining may lead to a remotely exploitable vulnerability.

Writing data while the stream is not draining is particularly
problematic for a `Transform`, because the `Transform` streams are paused
by default until they are piped or a `'data'` or `'readable'` event handler
is added.

If the data to be written can be generated or fetched on demand, it is
recommended to encapsulate the logic into a `Readable` and use [pipe](internal_.WritableBase.md#pipe). However, if calling `write()` is preferred, it is
possible to respect backpressure and avoid memory issues using the `'drain'` event:

```js
function write(data, cb) {
  if (!stream.write(data)) {
    stream.once('drain', cb);
  } else {
    process.nextTick(cb);
  }
}

// Wait for cb to be called before doing any other write.
write('hello', () => {
  console.log('Write completed, do more writes now.');
});
```

A `Writable` stream in object mode will always ignore the `encoding` argument.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chunk` | `any` | Optional data to write. For streams not operating in object mode, `chunk` must be a string, `Buffer` or `Uint8Array`. For object mode streams, `chunk` may be any JavaScript value other than `null`. |
| `callback?` | (`error`: `undefined` \| ``null`` \| [`Error`](../interfaces/internal_.Error.md)) => `void` | Callback for when this chunk of data is flushed. |

#### Returns

`boolean`

`false` if the stream wishes for the calling code to wait for the `'drain'` event to be emitted before continuing to write additional data; otherwise `true`.

**`Since`**

v0.9.4

#### Implementation of

[WritableStream](../interfaces/internal_.WritableStream.md).[write](../interfaces/internal_.WritableStream.md#write)

#### Defined in

node_modules/@types/node/stream.d.ts:783

▸ **write**(`chunk`, `encoding`, `callback?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `encoding` | [`BufferEncoding`](../modules/internal_.md#bufferencoding) |
| `callback?` | (`error`: `undefined` \| ``null`` \| [`Error`](../interfaces/internal_.Error.md)) => `void` |

#### Returns

`boolean`

#### Implementation of

[WritableStream](../interfaces/internal_.WritableStream.md).[write](../interfaces/internal_.WritableStream.md#write)

#### Defined in

node_modules/@types/node/stream.d.ts:784

___

### addAbortListener

▸ **addAbortListener**(`signal`, `resource`): [`Disposable`](../interfaces/internal_.Disposable.md)

Listens once to the `abort` event on the provided `signal`.

Listening to the `abort` event on abort signals is unsafe and may
lead to resource leaks since another third party with the signal can
call `e.stopImmediatePropagation()`. Unfortunately Node.js cannot change
this since it would violate the web standard. Additionally, the original
API makes it easy to forget to remove listeners.

This API allows safely using `AbortSignal`s in Node.js APIs by solving these
two issues by listening to the event such that `stopImmediatePropagation` does
not prevent the listener from running.

Returns a disposable so that it may be unsubscribed from more easily.

```js
import { addAbortListener } from 'node:events';

function example(signal) {
  let disposable;
  try {
    signal.addEventListener('abort', (e) => e.stopImmediatePropagation());
    disposable = addAbortListener(signal, (e) => {
      // Do something when signal is aborted.
    });
  } finally {
    disposable?.[Symbol.dispose]();
  }
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `signal` | `AbortSignal` |
| `resource` | (`event`: `Event`) => `void` |

#### Returns

[`Disposable`](../interfaces/internal_.Disposable.md)

Disposable that removes the `abort` listener.

**`Since`**

v20.5.0

#### Inherited from

[Stream](internal_.Stream.md).[addAbortListener](internal_.Stream.md#addabortlistener)

#### Defined in

node_modules/@types/node/events.d.ts:400

___

### getEventListeners

▸ **getEventListeners**(`emitter`, `name`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

For `EventEmitter`s this behaves exactly the same as calling `.listeners` on
the emitter.

For `EventTarget`s this is the only way to get the event listeners for the
event target. This is useful for debugging and diagnostic purposes.

```js
import { getEventListeners, EventEmitter } from 'node:events';

{
  const ee = new EventEmitter();
  const listener = () => console.log('Events are fun');
  ee.on('foo', listener);
  console.log(getEventListeners(ee, 'foo')); // [ [Function: listener] ]
}
{
  const et = new EventTarget();
  const listener = () => console.log('Events are fun');
  et.addEventListener('foo', listener);
  console.log(getEventListeners(et, 'foo')); // [ [Function: listener] ]
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | [`EventEmitter`](../interfaces/internal_.EventEmitter-2.md)\<[`DefaultEventMap`](../modules/internal_.md#defaulteventmap)\> \| [`_DOMEventTarget`](../interfaces/internal_._DOMEventTarget.md) |
| `name` | `string` \| `symbol` |

#### Returns

`Function`[]

**`Since`**

v15.2.0, v14.17.0

#### Inherited from

[Stream](internal_.Stream.md).[getEventListeners](internal_.Stream.md#geteventlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:321

___

### getMaxListeners

▸ **getMaxListeners**(`emitter`): `number`

Returns the currently set max amount of listeners.

For `EventEmitter`s this behaves exactly the same as calling `.getMaxListeners` on
the emitter.

For `EventTarget`s this is the only way to get the max event listeners for the
event target. If the number of event handlers on a single EventTarget exceeds
the max set, the EventTarget will print a warning.

```js
import { getMaxListeners, setMaxListeners, EventEmitter } from 'node:events';

{
  const ee = new EventEmitter();
  console.log(getMaxListeners(ee)); // 10
  setMaxListeners(11, ee);
  console.log(getMaxListeners(ee)); // 11
}
{
  const et = new EventTarget();
  console.log(getMaxListeners(et)); // 10
  setMaxListeners(11, et);
  console.log(getMaxListeners(et)); // 11
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | [`EventEmitter`](../interfaces/internal_.EventEmitter-2.md)\<[`DefaultEventMap`](../modules/internal_.md#defaulteventmap)\> \| [`_DOMEventTarget`](../interfaces/internal_._DOMEventTarget.md) |

#### Returns

`number`

**`Since`**

v19.9.0

#### Inherited from

[Stream](internal_.Stream.md).[getMaxListeners](internal_.Stream.md#getmaxlisteners-1)

#### Defined in

node_modules/@types/node/events.d.ts:350

___

### listenerCount

▸ **listenerCount**(`emitter`, `eventName`): `number`

A class method that returns the number of listeners for the given `eventName`registered on the given `emitter`.

```js
import { EventEmitter, listenerCount } from 'node:events';

const myEmitter = new EventEmitter();
myEmitter.on('event', () => {});
myEmitter.on('event', () => {});
console.log(listenerCount(myEmitter, 'event'));
// Prints: 2
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | [`EventEmitter`](../interfaces/internal_.EventEmitter-2.md)\<[`DefaultEventMap`](../modules/internal_.md#defaulteventmap)\> | The emitter to query |
| `eventName` | `string` \| `symbol` | The event name |

#### Returns

`number`

**`Since`**

v0.9.12

**`Deprecated`**

Since v3.2.0 - Use `listenerCount` instead.

#### Inherited from

[Stream](internal_.Stream.md).[listenerCount](internal_.Stream.md#listenercount-1)

#### Defined in

node_modules/@types/node/events.d.ts:293

___

### on

▸ **on**(`emitter`, `eventName`, `options?`): [`AsyncIterableIterator`](../interfaces/internal_.AsyncIterableIterator.md)\<`any`\>

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

const ee = new EventEmitter();

// Emit later on
process.nextTick(() => {
  ee.emit('foo', 'bar');
  ee.emit('foo', 42);
});

for await (const event of on(ee, 'foo')) {
  // The execution of this inner block is synchronous and it
  // processes one event at a time (even with await). Do not use
  // if concurrent execution is required.
  console.log(event); // prints ['bar'] [42]
}
// Unreachable here
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

const ac = new AbortController();

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo', { signal: ac.signal })) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();

process.nextTick(() => ac.abort());
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | [`EventEmitter`](../interfaces/internal_.EventEmitter-2.md)\<[`DefaultEventMap`](../modules/internal_.md#defaulteventmap)\> | - |
| `eventName` | `string` | The name of the event being listened for |
| `options?` | [`StaticEventEmitterOptions`](../interfaces/internal_.StaticEventEmitterOptions.md) | - |

#### Returns

[`AsyncIterableIterator`](../interfaces/internal_.AsyncIterableIterator.md)\<`any`\>

that iterates `eventName` events emitted by the `emitter`

**`Since`**

v13.6.0, v12.16.0

#### Inherited from

[Stream](internal_.Stream.md).[on](internal_.Stream.md#on-1)

#### Defined in

node_modules/@types/node/events.d.ts:271

___

### once

▸ **once**(`emitter`, `eventName`, `options?`): `Promise`\<`any`[]\>

Creates a `Promise` that is fulfilled when the `EventEmitter` emits the given
event or that is rejected if the `EventEmitter` emits `'error'` while waiting.
The `Promise` will resolve with an array of all the arguments emitted to the
given event.

This method is intentionally generic and works with the web platform [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface, which has no special`'error'` event
semantics and does not listen to the `'error'` event.

```js
import { once, EventEmitter } from 'node:events';
import process from 'node:process';

const ee = new EventEmitter();

process.nextTick(() => {
  ee.emit('myevent', 42);
});

const [value] = await once(ee, 'myevent');
console.log(value);

const err = new Error('kaboom');
process.nextTick(() => {
  ee.emit('error', err);
});

try {
  await once(ee, 'myevent');
} catch (err) {
  console.error('error happened', err);
}
```

The special handling of the `'error'` event is only used when `events.once()`is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
import { EventEmitter, once } from 'node:events';

const ee = new EventEmitter();

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch((err) => console.error('error', err.message));

ee.emit('error', new Error('boom'));

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
import { EventEmitter, once } from 'node:events';

const ee = new EventEmitter();
const ac = new AbortController();

async function foo(emitter, event, signal) {
  try {
    await once(emitter, event, { signal });
    console.log('event emitted!');
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Waiting for the event was canceled!');
    } else {
      console.error('There was an error', error.message);
    }
  }
}

foo(ee, 'foo', ac.signal);
ac.abort(); // Abort waiting for the event
ee.emit('foo'); // Prints: Waiting for the event was canceled!
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | [`EventEmitter`](../interfaces/internal_.EventEmitter-2.md)\<[`DefaultEventMap`](../modules/internal_.md#defaulteventmap)\> |
| `eventName` | `string` \| `symbol` |
| `options?` | [`StaticEventEmitterOptions`](../interfaces/internal_.StaticEventEmitterOptions.md) |

#### Returns

`Promise`\<`any`[]\>

**`Since`**

v11.13.0, v10.16.0

#### Inherited from

[Stream](internal_.Stream.md).[once](internal_.Stream.md#once-1)

#### Defined in

node_modules/@types/node/events.d.ts:206

▸ **once**(`emitter`, `eventName`, `options?`): `Promise`\<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | [`_DOMEventTarget`](../interfaces/internal_._DOMEventTarget.md) |
| `eventName` | `string` |
| `options?` | [`StaticEventEmitterOptions`](../interfaces/internal_.StaticEventEmitterOptions.md) |

#### Returns

`Promise`\<`any`[]\>

#### Inherited from

[Stream](internal_.Stream.md).[once](internal_.Stream.md#once-1)

#### Defined in

node_modules/@types/node/events.d.ts:211

___

### setMaxListeners

▸ **setMaxListeners**(`n?`, `...eventTargets`): `void`

```js
import { setMaxListeners, EventEmitter } from 'node:events';

const target = new EventTarget();
const emitter = new EventEmitter();

setMaxListeners(5, target, emitter);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n?` | `number` | A non-negative number. The maximum number of listeners per `EventTarget` event. |
| `...eventTargets` | ([`EventEmitter`](../interfaces/internal_.EventEmitter-2.md)\<[`DefaultEventMap`](../modules/internal_.md#defaulteventmap)\> \| [`_DOMEventTarget`](../interfaces/internal_._DOMEventTarget.md))[] | - |

#### Returns

`void`

**`Since`**

v15.4.0

#### Inherited from

[Stream](internal_.Stream.md).[setMaxListeners](internal_.Stream.md#setmaxlisteners-1)

#### Defined in

node_modules/@types/node/events.d.ts:365
