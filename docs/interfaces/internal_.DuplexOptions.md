[mongo-baseops](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / DuplexOptions

# Interface: DuplexOptions

[\<internal\>](../modules/internal_.md).DuplexOptions

## Hierarchy

- [`ReadableOptions`](internal_.ReadableOptions.md)

- [`WritableOptions`](internal_.WritableOptions.md)

  ↳ **`DuplexOptions`**

  ↳↳ [`TransformOptions`](internal_.internal.TransformOptions.md)

## Table of contents

### Properties

- [allowHalfOpen](internal_.DuplexOptions.md#allowhalfopen)
- [autoDestroy](internal_.DuplexOptions.md#autodestroy)
- [decodeStrings](internal_.DuplexOptions.md#decodestrings)
- [defaultEncoding](internal_.DuplexOptions.md#defaultencoding)
- [emitClose](internal_.DuplexOptions.md#emitclose)
- [encoding](internal_.DuplexOptions.md#encoding)
- [highWaterMark](internal_.DuplexOptions.md#highwatermark)
- [objectMode](internal_.DuplexOptions.md#objectmode)
- [readableHighWaterMark](internal_.DuplexOptions.md#readablehighwatermark)
- [readableObjectMode](internal_.DuplexOptions.md#readableobjectmode)
- [signal](internal_.DuplexOptions.md#signal)
- [writableCorked](internal_.DuplexOptions.md#writablecorked)
- [writableHighWaterMark](internal_.DuplexOptions.md#writablehighwatermark)
- [writableObjectMode](internal_.DuplexOptions.md#writableobjectmode)

### Methods

- [construct](internal_.DuplexOptions.md#construct)
- [destroy](internal_.DuplexOptions.md#destroy)
- [final](internal_.DuplexOptions.md#final)
- [read](internal_.DuplexOptions.md#read)
- [write](internal_.DuplexOptions.md#write)
- [writev](internal_.DuplexOptions.md#writev)

## Properties

### allowHalfOpen

• `Optional` **allowHalfOpen**: `boolean`

#### Defined in

node_modules/@types/node/stream.d.ts:1018

___

### autoDestroy

• `Optional` **autoDestroy**: `boolean`

#### Inherited from

[WritableOptions](internal_.WritableOptions.md).[autoDestroy](internal_.WritableOptions.md#autodestroy)

#### Defined in

node_modules/@types/node/stream.d.ts:952

___

### decodeStrings

• `Optional` **decodeStrings**: `boolean`

#### Inherited from

[WritableOptions](internal_.WritableOptions.md).[decodeStrings](internal_.WritableOptions.md#decodestrings)

#### Defined in

node_modules/@types/node/stream.d.ts:979

___

### defaultEncoding

• `Optional` **defaultEncoding**: [`BufferEncoding`](../modules/internal_.md#bufferencoding)

#### Inherited from

[WritableOptions](internal_.WritableOptions.md).[defaultEncoding](internal_.WritableOptions.md#defaultencoding)

#### Defined in

node_modules/@types/node/stream.d.ts:980

___

### emitClose

• `Optional` **emitClose**: `boolean`

#### Inherited from

[WritableOptions](internal_.WritableOptions.md).[emitClose](internal_.WritableOptions.md#emitclose)

#### Defined in

node_modules/@types/node/stream.d.ts:947

___

### encoding

• `Optional` **encoding**: [`BufferEncoding`](../modules/internal_.md#bufferencoding)

#### Inherited from

[ReadableOptions](internal_.ReadableOptions.md).[encoding](internal_.ReadableOptions.md#encoding)

#### Defined in

node_modules/@types/node/stream.d.ts:955

___

### highWaterMark

• `Optional` **highWaterMark**: `number`

#### Inherited from

[WritableOptions](internal_.WritableOptions.md).[highWaterMark](internal_.WritableOptions.md#highwatermark)

#### Defined in

node_modules/@types/node/stream.d.ts:948

___

### objectMode

• `Optional` **objectMode**: `boolean`

#### Inherited from

[WritableOptions](internal_.WritableOptions.md).[objectMode](internal_.WritableOptions.md#objectmode)

#### Defined in

node_modules/@types/node/stream.d.ts:949

___

### readableHighWaterMark

• `Optional` **readableHighWaterMark**: `number`

#### Defined in

node_modules/@types/node/stream.d.ts:1021

___

### readableObjectMode

• `Optional` **readableObjectMode**: `boolean`

#### Defined in

node_modules/@types/node/stream.d.ts:1019

___

### signal

• `Optional` **signal**: `AbortSignal`

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[WritableOptions](internal_.WritableOptions.md).[signal](internal_.WritableOptions.md#signal)

#### Defined in

node_modules/@types/node/events.d.ts:469

___

### writableCorked

• `Optional` **writableCorked**: `number`

#### Defined in

node_modules/@types/node/stream.d.ts:1023

___

### writableHighWaterMark

• `Optional` **writableHighWaterMark**: `number`

#### Defined in

node_modules/@types/node/stream.d.ts:1022

___

### writableObjectMode

• `Optional` **writableObjectMode**: `boolean`

#### Defined in

node_modules/@types/node/stream.d.ts:1020

## Methods

### construct

▸ **construct**(`this`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Duplex`](../classes/internal_.Duplex.md) |
| `callback` | (`error?`: ``null`` \| [`Error`](internal_.Error.md)) => `void` |

#### Returns

`void`

#### Overrides

[WritableOptions](internal_.WritableOptions.md).[construct](internal_.WritableOptions.md#construct)

#### Defined in

node_modules/@types/node/stream.d.ts:1024

___

### destroy

▸ **destroy**(`this`, `error`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Duplex`](../classes/internal_.Duplex.md) |
| `error` | ``null`` \| [`Error`](internal_.Error.md) |
| `callback` | (`error?`: ``null`` \| [`Error`](internal_.Error.md)) => `void` |

#### Returns

`void`

#### Overrides

[WritableOptions](internal_.WritableOptions.md).[destroy](internal_.WritableOptions.md#destroy)

#### Defined in

node_modules/@types/node/stream.d.ts:1036

___

### final

▸ **final**(`this`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Duplex`](../classes/internal_.Duplex.md) |
| `callback` | (`error?`: ``null`` \| [`Error`](internal_.Error.md)) => `void` |

#### Returns

`void`

#### Overrides

[WritableOptions](internal_.WritableOptions.md).[final](internal_.WritableOptions.md#final)

#### Defined in

node_modules/@types/node/stream.d.ts:1035

___

### read

▸ **read**(`this`, `size`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Duplex`](../classes/internal_.Duplex.md) |
| `size` | `number` |

#### Returns

`void`

#### Overrides

[ReadableOptions](internal_.ReadableOptions.md).[read](internal_.ReadableOptions.md#read)

#### Defined in

node_modules/@types/node/stream.d.ts:1025

___

### write

▸ **write**(`this`, `chunk`, `encoding`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Duplex`](../classes/internal_.Duplex.md) |
| `chunk` | `any` |
| `encoding` | [`BufferEncoding`](../modules/internal_.md#bufferencoding) |
| `callback` | (`error?`: ``null`` \| [`Error`](internal_.Error.md)) => `void` |

#### Returns

`void`

#### Overrides

[WritableOptions](internal_.WritableOptions.md).[write](internal_.WritableOptions.md#write)

#### Defined in

node_modules/@types/node/stream.d.ts:1026

___

### writev

▸ **writev**(`this`, `chunks`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Duplex`](../classes/internal_.Duplex.md) |
| `chunks` | \{ `chunk`: `any` ; `encoding`: [`BufferEncoding`](../modules/internal_.md#bufferencoding)  }[] |
| `callback` | (`error?`: ``null`` \| [`Error`](internal_.Error.md)) => `void` |

#### Returns

`void`

#### Overrides

[WritableOptions](internal_.WritableOptions.md).[writev](internal_.WritableOptions.md#writev)

#### Defined in

node_modules/@types/node/stream.d.ts:1027
