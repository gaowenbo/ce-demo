(function(){
'use strict';
var $linkingInfo = Object.freeze({
  "semantics": Object.freeze({
    "asInstanceOfs": 1,
    "arrayIndexOutOfBounds": 1,
    "moduleInit": 2,
    "strictFloats": false,
    "productionMode": false
  }),
  "assumingES6": false,
  "linkerVersion": "1.0.0-M7",
  "globalThis": this
});
var $imul = (Math.imul || (function(a, b) {
  var ah = (a >>> 16);
  var al = (a & 65535);
  var bh = (b >>> 16);
  var bl = (b & 65535);
  return (((al * bl) + ((((ah * bl) + (al * bh)) << 16) >>> 0)) | 0)
}));
var $fround = (Math.fround || (function(v) {
  return (+v)
}));
var $clz32 = (Math.clz32 || (function(i) {
  if ((i === 0)) {
    return 32
  };
  var r = 1;
  if (((i & (-65536)) === 0)) {
    i = (i << 16);
    r = (r + 16)
  };
  if (((i & (-16777216)) === 0)) {
    i = (i << 8);
    r = (r + 8)
  };
  if (((i & (-268435456)) === 0)) {
    i = (i << 4);
    r = (r + 4)
  };
  if (((i & (-1073741824)) === 0)) {
    i = (i << 2);
    r = (r + 2)
  };
  return (r + (i >> 31))
}));
var $L0;
function $propertyName(obj) {
  for (var prop in obj) {
    return prop
  }
}
function $Char(c) {
  this.c = c
}
$Char.prototype.toString = (function() {
  return String.fromCharCode(this.c)
});
function $throwClassCastException(instance, classFullName) {
  throw $ct_sjsr_UndefinedBehaviorError__init___jl_Throwable(new $c_sjsr_UndefinedBehaviorError(), $ct_jl_ClassCastException__init___T(new $c_jl_ClassCastException(), ((instance + " is not an instance of ") + classFullName)))
}
function $throwArrayCastException(instance, classArrayEncodedName, depth) {
  while ((--depth)) {
    classArrayEncodedName = ("[" + classArrayEncodedName)
  };
  $throwClassCastException(instance, classArrayEncodedName)
}
function $throwArrayIndexOutOfBoundsException(i) {
  throw $ct_sjsr_UndefinedBehaviorError__init___jl_Throwable(new $c_sjsr_UndefinedBehaviorError(), $ct_jl_ArrayIndexOutOfBoundsException__init___T(new $c_jl_ArrayIndexOutOfBoundsException(), ((i === null) ? null : ("" + i))))
}
function $noIsInstance(instance) {
  throw new TypeError("Cannot call isInstance() on a Class representing a JS trait/object")
}
function $makeNativeArrayWrapper(arrayClassData, nativeArray) {
  return new arrayClassData.constr(nativeArray)
}
function $newArrayObject(arrayClassData, lengths) {
  return $newArrayObjectInternal(arrayClassData, lengths, 0)
}
function $newArrayObjectInternal(arrayClassData, lengths, lengthIndex) {
  var result = new arrayClassData.constr(lengths[lengthIndex]);
  if ((lengthIndex < (lengths.length - 1))) {
    var subArrayClassData = arrayClassData.componentData;
    var subLengthIndex = (lengthIndex + 1);
    var underlying = result.u;
    for (var i = 0; (i < underlying.length); (i++)) {
      underlying[i] = $newArrayObjectInternal(subArrayClassData, lengths, subLengthIndex)
    }
  };
  return result
}
function $objectGetClass(instance) {
  switch ((typeof instance)) {
    case "string": {
      return $d_T.getClassOf()
    }
    case "number": {
      var v = (instance | 0);
      if ((v === instance)) {
        if ($isByte(v)) {
          return $d_jl_Byte.getClassOf()
        } else if ($isShort(v)) {
          return $d_jl_Short.getClassOf()
        } else {
          return $d_jl_Integer.getClassOf()
        }
      } else {
        return $d_jl_Float.getClassOf()
      }
    }
    case "boolean": {
      return $d_jl_Boolean.getClassOf()
    }
    case "undefined": {
      return $d_jl_Void.getClassOf()
    }
    default: {
      if ((instance === null)) {
        return instance.getClass__jl_Class()
      } else if ($is_sjsr_RuntimeLong(instance)) {
        return $d_jl_Long.getClassOf()
      } else if ((instance instanceof $Char)) {
        return $d_jl_Character.getClassOf()
      } else if ((!(!(instance && instance.$classData)))) {
        return instance.$classData.getClassOf()
      } else {
        return null
      }
    }
  }
}
function $dp_toString__T(instance) {
  return ((instance === (void 0)) ? "undefined" : instance.toString())
}
function $dp_getClass__jl_Class(instance) {
  return $objectGetClass(instance)
}
function $dp_clone__O(instance) {
  if (((!(!(instance && instance.$classData))) || (instance === null))) {
    return instance.clone__O()
  } else {
    throw $ct_jl_CloneNotSupportedException__init___(new $c_jl_CloneNotSupportedException())
  }
}
function $dp_notify__V(instance) {
  if ((instance === null)) {
    instance.notify__V()
  }
}
function $dp_notifyAll__V(instance) {
  if ((instance === null)) {
    instance.notifyAll__V()
  }
}
function $dp_finalize__V(instance) {
  if (((!(!(instance && instance.$classData))) || (instance === null))) {
    instance.finalize__V()
  }
}
function $dp_equals__O__Z(instance, rhs) {
  if (((!(!(instance && instance.$classData))) || (instance === null))) {
    return instance.equals__O__Z(rhs)
  } else if (((typeof instance) === "number")) {
    return $f_jl_Double__equals__O__Z(instance, rhs)
  } else if ((instance instanceof $Char)) {
    return $f_jl_Character__equals__O__Z(instance, rhs)
  } else {
    return (instance === rhs)
  }
}
function $dp_hashCode__I(instance) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__hashCode__I(instance)
    }
    case "number": {
      return $f_jl_Double__hashCode__I(instance)
    }
    case "boolean": {
      return $f_jl_Boolean__hashCode__I(instance)
    }
    case "undefined": {
      return $f_jl_Void__hashCode__I(instance)
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.hashCode__I()
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I(instance)
      } else {
        return $systemIdentityHashCode(instance)
      }
    }
  }
}
function $dp_compareTo__O__I(instance, rhs) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__compareTo__O__I(instance, rhs)
    }
    case "number": {
      return $f_jl_Double__compareTo__O__I(instance, rhs)
    }
    case "boolean": {
      return $f_jl_Boolean__compareTo__O__I(instance, rhs)
    }
    default: {
      if ((instance instanceof $Char)) {
        return $f_jl_Character__compareTo__O__I(instance, rhs)
      } else {
        return instance.compareTo__O__I(rhs)
      }
    }
  }
}
function $dp_length__I(instance) {
  if (((typeof instance) === "string")) {
    return $f_T__length__I(instance)
  } else {
    return instance.length__I()
  }
}
function $dp_charAt__I__C(instance, index) {
  if (((typeof instance) === "string")) {
    return $f_T__charAt__I__C(instance, index)
  } else {
    return instance.charAt__I__C(index)
  }
}
function $dp_subSequence__I__I__jl_CharSequence(instance, start, end) {
  if (((typeof instance) === "string")) {
    return $f_T__subSequence__I__I__jl_CharSequence(instance, start, end)
  } else {
    return instance.subSequence__I__I__jl_CharSequence(start, end)
  }
}
function $dp_byteValue__B(instance) {
  if (((typeof instance) === "number")) {
    return $f_jl_Double__byteValue__B(instance)
  } else {
    return instance.byteValue__B()
  }
}
function $dp_shortValue__S(instance) {
  if (((typeof instance) === "number")) {
    return $f_jl_Double__shortValue__S(instance)
  } else {
    return instance.shortValue__S()
  }
}
function $dp_intValue__I(instance) {
  if (((typeof instance) === "number")) {
    return $f_jl_Double__intValue__I(instance)
  } else {
    return instance.intValue__I()
  }
}
function $dp_longValue__J(instance) {
  if (((typeof instance) === "number")) {
    return $f_jl_Double__longValue__J(instance)
  } else {
    return instance.longValue__J()
  }
}
function $dp_floatValue__F(instance) {
  if (((typeof instance) === "number")) {
    return $f_jl_Double__floatValue__F(instance)
  } else {
    return instance.floatValue__F()
  }
}
function $dp_doubleValue__D(instance) {
  if (((typeof instance) === "number")) {
    return $f_jl_Double__doubleValue__D(instance)
  } else {
    return instance.doubleValue__D()
  }
}
function $intDiv(x, y) {
  if ((y === 0)) {
    throw $ct_jl_ArithmeticException__init___T(new $c_jl_ArithmeticException(), "/ by zero")
  } else {
    return ((x / y) | 0)
  }
}
function $intMod(x, y) {
  if ((y === 0)) {
    throw $ct_jl_ArithmeticException__init___T(new $c_jl_ArithmeticException(), "/ by zero")
  } else {
    return ((x % y) | 0)
  }
}
function $doubleToInt(x) {
  return ((x > 2147483647) ? 2147483647 : ((x < (-2147483648)) ? (-2147483648) : (x | 0)))
}
function $newJSObjectWithVarargs(ctor, args) {
  var instance = Object.create(ctor.prototype);
  var result = ctor.apply(instance, args);
  switch ((typeof result)) {
    case "string":
    case "number":
    case "boolean":
    case "undefined":
    case "symbol": {
      return instance
    }
    default: {
      return ((result === null) ? instance : result)
    }
  }
}
function $resolveSuperRef(superClass, propName) {
  var getPrototypeOf = Object.getPrototyeOf;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var superProto = superClass.prototype;
  while ((superProto !== null)) {
    var desc = getOwnPropertyDescriptor(superProto, propName);
    if ((desc !== (void 0))) {
      return desc
    };
    superProto = getPrototypeOf(superProto)
  }
}
function $superGet(superClass, self, propName) {
  var desc = $resolveSuperRef(superClass, propName);
  if ((desc !== (void 0))) {
    var getter = desc.get;
    return ((getter !== (void 0)) ? getter.call(self) : getter.value)
  }
}
function $superSet(superClass, self, propName, value) {
  var desc = $resolveSuperRef(superClass, propName);
  if ((desc !== (void 0))) {
    var setter = desc.set;
    if ((setter !== (void 0))) {
      setter.call(self, value);
      return (void 0)
    }
  };
  throw new TypeError((("super has no setter '" + propName) + "'."))
}
function $systemArraycopy(src, srcPos, dest, destPos, length) {
  var srcu = src.u;
  var destu = dest.u;
  if ((((((srcPos < 0) || (destPos < 0)) || (length < 0)) || (srcPos > ((srcu.length - length) | 0))) || (destPos > ((destu.length - length) | 0)))) {
    $throwArrayIndexOutOfBoundsException(null)
  };
  if ((((srcu !== destu) || (destPos < srcPos)) || (((srcPos + length) | 0) < destPos))) {
    for (var i = 0; (i < length); i = ((i + 1) | 0)) {
      destu[((destPos + i) | 0)] = srcu[((srcPos + i) | 0)]
    }
  } else {
    for (var i = ((length - 1) | 0); (i >= 0); i = ((i - 1) | 0)) {
      destu[((destPos + i) | 0)] = srcu[((srcPos + i) | 0)]
    }
  }
}
var $lastIDHash = 0;
var $idHashCodeMap = (((typeof WeakMap) !== "undefined") ? new WeakMap() : null);
var $systemIdentityHashCode = (($idHashCodeMap !== null) ? (function(obj) {
  switch ((typeof obj)) {
    case "string":
    case "number":
    case "bigint":
    case "boolean":
    case "undefined": {
      return $dp_hashCode__I(obj)
    }
    default: {
      if ((obj === null)) {
        return 0
      } else {
        var hash = $idHashCodeMap.get(obj);
        if ((hash === (void 0))) {
          hash = (($lastIDHash + 1) | 0);
          $lastIDHash = hash;
          $idHashCodeMap.set(obj, hash)
        };
        return hash
      }
    }
  }
}) : (function(obj) {
  switch ((typeof obj)) {
    case "string":
    case "number":
    case "bigint":
    case "boolean":
    case "undefined": {
      return $dp_hashCode__I(obj)
    }
    default: {
      if ((!(!(obj && obj.$classData)))) {
        var hash = obj.$idHashCode$0;
        if ((hash !== (void 0))) {
          return hash
        } else if ((!Object.isSealed(obj))) {
          hash = (($lastIDHash + 1) | 0);
          $lastIDHash = hash;
          obj.$idHashCode$0 = hash;
          return hash
        } else {
          return 42
        }
      } else if ((obj === null)) {
        0
      } else {
        42
      }
    }
  }
}));
function $isByte(v) {
  return ((((typeof v) === "number") && (((v << 24) >> 24) === v)) && ((1 / v) !== (1 / (-0))))
}
function $isShort(v) {
  return ((((typeof v) === "number") && (((v << 16) >> 16) === v)) && ((1 / v) !== (1 / (-0))))
}
function $isInt(v) {
  return ((((typeof v) === "number") && ((v | 0) === v)) && ((1 / v) !== (1 / (-0))))
}
function $asUnit(v) {
  if (((v === (void 0)) || (v === null))) {
    return v
  } else {
    $throwClassCastException(v, "java.lang.Void")
  }
}
function $asBoolean(v) {
  if ((((typeof v) === "boolean") || (v === null))) {
    return v
  } else {
    $throwClassCastException(v, "java.lang.Boolean")
  }
}
function $asChar(v) {
  if (((v instanceof $Char) || (v === null))) {
    return v
  } else {
    $throwClassCastException(v, "java.lang.Character")
  }
}
function $asByte(v) {
  if (($isByte(v) || (v === null))) {
    return v
  } else {
    $throwClassCastException(v, "java.lang.Byte")
  }
}
function $asShort(v) {
  if (($isShort(v) || (v === null))) {
    return v
  } else {
    $throwClassCastException(v, "java.lang.Short")
  }
}
function $asInt(v) {
  if (($isInt(v) || (v === null))) {
    return v
  } else {
    $throwClassCastException(v, "java.lang.Integer")
  }
}
function $asFloat(v) {
  if ((((typeof v) === "number") || (v === null))) {
    return v
  } else {
    $throwClassCastException(v, "java.lang.Float")
  }
}
function $asDouble(v) {
  if ((((typeof v) === "number") || (v === null))) {
    return v
  } else {
    $throwClassCastException(v, "java.lang.Double")
  }
}
function $bC(c) {
  return new $Char(c)
}
var $bC0 = $bC(0);
function $uZ(v) {
  return (!(!$asBoolean(v)))
}
function $uC(v) {
  return ((v === null) ? 0 : $asChar(v).c)
}
function $uB(v) {
  return ($asByte(v) | 0)
}
function $uS(v) {
  return ($asShort(v) | 0)
}
function $uI(v) {
  return ($asInt(v) | 0)
}
function $uJ(v) {
  return ((v === null) ? $L0 : $as_sjsr_RuntimeLong(v))
}
function $uF(v) {
  return (+$asFloat(v))
}
function $uD(v) {
  return (+$asDouble(v))
}
function $byteArray2TypedArray(value) {
  return new Int8Array(value.u)
}
function $typedArray2ByteArray(value) {
  return new ($d_B.getArrayOf().constr)(new Int8Array(value))
}
function $shortArray2TypedArray(value) {
  return new Int16Array(value.u)
}
function $typedArray2ShortArray(value) {
  return new ($d_S.getArrayOf().constr)(new Int16Array(value))
}
function $charArray2TypedArray(value) {
  return new Uint16Array(value.u)
}
function $typedArray2CharArray(value) {
  return new ($d_C.getArrayOf().constr)(new Uint16Array(value))
}
function $intArray2TypedArray(value) {
  return new Int32Array(value.u)
}
function $typedArray2IntArray(value) {
  return new ($d_I.getArrayOf().constr)(new Int32Array(value))
}
function $floatArray2TypedArray(value) {
  return new Float32Array(value.u)
}
function $typedArray2FloatArray(value) {
  return new ($d_F.getArrayOf().constr)(new Float32Array(value))
}
function $doubleArray2TypedArray(value) {
  return new Float64Array(value.u)
}
function $typedArray2DoubleArray(value) {
  return new ($d_D.getArrayOf().constr)(new Float64Array(value))
}
function $TypeData() {
  this.constr = (void 0);
  this.parentData = (void 0);
  this.ancestors = null;
  this.componentData = null;
  this.arrayBase = null;
  this.arrayDepth = 0;
  this.zero = null;
  this.arrayEncodedName = "";
  this._classOf = (void 0);
  this._arrayOf = (void 0);
  this.isArrayOf = (void 0);
  this.name = "";
  this.isPrimitive = false;
  this.isInterface = false;
  this.isArrayClass = false;
  this.isJSClass = false;
  this.isInstance = (void 0)
}
$TypeData.prototype.initPrim = (function(zero, arrayEncodedName, displayName, isArrayOf) {
  this.ancestors = {};
  this.zero = zero;
  this.arrayEncodedName = arrayEncodedName;
  this.isArrayOf = isArrayOf;
  this.name = displayName;
  this.isPrimitive = true;
  this.isInstance = (function(obj) {
    return false
  });
  return this
});
$TypeData.prototype.initClass = (function(internalNameObj, isInterface, fullName, ancestors, isJSType, parentData, isInstance, isArrayOf) {
  var internalName = $propertyName(internalNameObj);
  this.parentData = parentData;
  this.ancestors = ancestors;
  this.arrayEncodedName = (("L" + fullName) + ";");
  this.isArrayOf = (isArrayOf || (function(obj, depth) {
    return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors[internalName])))
  }));
  this.name = fullName;
  this.isInterface = isInterface;
  this.isJSType = (!(!isJSType));
  this.isInstance = (isInstance || (function(obj) {
    return (!(!((obj && obj.$classData) && obj.$classData.ancestors[internalName])))
  }));
  return this
});
$TypeData.prototype.initArray = (function(componentData) {
  var componentZero = ((componentData.zero === "longZero") ? $L0 : componentData.zero);
  function ArrayClass(arg) {
    if (((typeof arg) === "number")) {
      this.u = new Array(arg);
      for (var i = 0; (i < arg); (i++)) {
        this.u[i] = componentZero
      }
    } else {
      this.u = arg
    }
  }
  ArrayClass.prototype = new $h_O();
  ArrayClass.prototype.constructor = ArrayClass;
  ArrayClass.prototype.get = (function(i) {
    if (((i < 0) || (i >= this.u.length))) {
      $throwArrayIndexOutOfBoundsException(i)
    };
    return this.u[i]
  });
  ArrayClass.prototype.set = (function(i, v) {
    if (((i < 0) || (i >= this.u.length))) {
      $throwArrayIndexOutOfBoundsException(i)
    };
    this.u[i] = v
  });
  ArrayClass.prototype.clone__O = (function() {
    return new ArrayClass(((this.u instanceof Array) ? this.u.slice(0) : new this.u.constructor(this.u)))
  });
  ArrayClass.prototype.$classData = this;
  var encodedName = ("[" + componentData.arrayEncodedName);
  var componentBase = (componentData.arrayBase || componentData);
  var arrayDepth = (componentData.arrayDepth + 1);
  this.constr = ArrayClass;
  this.parentData = $d_O;
  this.ancestors = {
    O: 1,
    jl_Cloneable: 1,
    Ljava_io_Serializable: 1
  };
  this.componentData = componentData;
  this.arrayBase = componentBase;
  this.arrayDepth = arrayDepth;
  this.arrayEncodedName = encodedName;
  this.name = encodedName;
  this.isArrayClass = true;
  this.isInstance = (function(obj) {
    return componentBase.isArrayOf(obj, arrayDepth)
  });
  return this
});
$TypeData.prototype.getClassOf = (function() {
  if ((!this._classOf)) {
    this._classOf = new $c_jl_Class(this)
  };
  return this._classOf
});
$TypeData.prototype.getArrayOf = (function() {
  if ((!this._arrayOf)) {
    this._arrayOf = new $TypeData().initArray(this)
  };
  return this._arrayOf
});
$TypeData.prototype.isAssignableFrom = (function(that) {
  if ((this.isPrimitive || that.isPrimitive)) {
    return (this === that)
  } else {
    var thatFakeInstance;
    if ((that === $d_T)) {
      thatFakeInstance = ""
    } else if ((that === $d_jl_Boolean)) {
      thatFakeInstance = false
    } else if ((((((that === $d_jl_Byte) || (that === $d_jl_Short)) || (that === $d_jl_Integer)) || (that === $d_jl_Float)) || (that === $d_jl_Double))) {
      thatFakeInstance = 0
    } else if ((that === $d_jl_Long.getClassOf())) {
      thatFakeInstance = $L0
    } else if ((that === $d_jl_Void.getClassOf())) {
      thatFakeInstance = (void 0)
    } else {
      thatFakeInstance = {
        $classData: that
      }
    };
    return this.isInstance(thatFakeInstance)
  }
});
$TypeData.prototype.getSuperclass = (function() {
  return (this.parentData ? this.parentData.getClassOf() : null)
});
$TypeData.prototype.getComponentType = (function() {
  return (this.componentData ? this.componentData.getClassOf() : null)
});
$TypeData.prototype.newArrayOfThisClass = (function(lengths) {
  var arrayClassData = this;
  for (var i = 0; (i < lengths.length); (i++)) {
    arrayClassData = arrayClassData.getArrayOf()
  };
  return $newArrayObject(arrayClassData, lengths)
});
function $isArrayOf_V(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_V))))
}
function $isArrayOf_Z(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_Z))))
}
function $isArrayOf_C(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_C))))
}
function $isArrayOf_B(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_B))))
}
function $isArrayOf_S(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_S))))
}
function $isArrayOf_I(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_I))))
}
function $isArrayOf_J(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_J))))
}
function $isArrayOf_F(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_F))))
}
function $isArrayOf_D(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_D))))
}
function $asArrayOf_V(obj, depth) {
  if (($isArrayOf_V(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "V", depth)
  }
}
function $asArrayOf_Z(obj, depth) {
  if (($isArrayOf_Z(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "Z", depth)
  }
}
function $asArrayOf_C(obj, depth) {
  if (($isArrayOf_C(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "C", depth)
  }
}
function $asArrayOf_B(obj, depth) {
  if (($isArrayOf_B(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "B", depth)
  }
}
function $asArrayOf_S(obj, depth) {
  if (($isArrayOf_S(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "S", depth)
  }
}
function $asArrayOf_I(obj, depth) {
  if (($isArrayOf_I(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "I", depth)
  }
}
function $asArrayOf_J(obj, depth) {
  if (($isArrayOf_J(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "J", depth)
  }
}
function $asArrayOf_F(obj, depth) {
  if (($isArrayOf_F(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "F", depth)
  }
}
function $asArrayOf_D(obj, depth) {
  if (($isArrayOf_D(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "D", depth)
  }
}
var $d_V = new $TypeData().initPrim((void 0), "V", "void", $isArrayOf_V);
var $d_Z = new $TypeData().initPrim(false, "Z", "boolean", $isArrayOf_Z);
var $d_C = new $TypeData().initPrim(0, "C", "char", $isArrayOf_C);
var $d_B = new $TypeData().initPrim(0, "B", "byte", $isArrayOf_B);
var $d_S = new $TypeData().initPrim(0, "S", "short", $isArrayOf_S);
var $d_I = new $TypeData().initPrim(0, "I", "int", $isArrayOf_I);
var $d_J = new $TypeData().initPrim("longZero", "J", "long", $isArrayOf_J);
var $d_F = new $TypeData().initPrim(0.0, "F", "float", $isArrayOf_F);
var $d_D = new $TypeData().initPrim(0.0, "D", "double", $isArrayOf_D);
function $ct_O__init___($thiz) {
  return $thiz
}
/** @constructor */
function $c_O() {
  /*<skip>*/
}
/** @constructor */
function $h_O() {
  /*<skip>*/
}
$h_O.prototype = $c_O.prototype;
$c_O.prototype.hashCode__I = (function() {
  return $systemIdentityHashCode(this)
});
$c_O.prototype.toString__T = (function() {
  var jsx$1 = $objectGetClass(this).getName__T();
  var i = this.hashCode__I();
  return ((jsx$1 + "@") + $as_T($uD((i >>> 0)).toString(16)))
});
$c_O.prototype.toString = (function() {
  return this.toString__T()
});
function $is_O(obj) {
  return (obj !== null)
}
function $as_O(obj) {
  return obj
}
function $isArrayOf_O(obj, depth) {
  var data = (obj && obj.$classData);
  if ((!data)) {
    return false
  } else {
    var arrayDepth = (data.arrayDepth || 0);
    return ((!(arrayDepth < depth)) && ((arrayDepth > depth) || (!data.arrayBase.isPrimitive)))
  }
}
function $asArrayOf_O(obj, depth) {
  return (($isArrayOf_O(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Object;", depth))
}
var $d_O = new $TypeData().initClass({
  O: 0
}, false, "java.lang.Object", {
  O: 1
}, (void 0), (void 0), $is_O, $isArrayOf_O);
$c_O.prototype.$classData = $d_O;
/** @constructor */
function $c_Lcom_yueyi_Game$() {
  /*<skip>*/
}
$c_Lcom_yueyi_Game$.prototype = new $h_O();
$c_Lcom_yueyi_Game$.prototype.constructor = $c_Lcom_yueyi_Game$;
/** @constructor */
function $h_Lcom_yueyi_Game$() {
  /*<skip>*/
}
$h_Lcom_yueyi_Game$.prototype = $c_Lcom_yueyi_Game$.prototype;
$c_Lcom_yueyi_Game$.prototype.main__AT__V = (function(args) {
  var canvas = $m_Lwcgamelib_wx$().createCanvas__Lwcgamelib_Canvas();
  var context = canvas.getContext__T__Lwcgamelib_CanvasContext("2d");
  var x = new $c_Lwcgamelib_CanvasContext$$anon$1(context);
  x.$$colon$eq__T__("#1aad19");
  context.fillRect__I__I__I__I__V((((-50) + ((canvas.width__I() / 2) | 0)) | 0), 0, 100, 100)
});
var $d_Lcom_yueyi_Game$ = new $TypeData().initClass({
  Lcom_yueyi_Game$: 0
}, false, "com.yueyi.Game$", {
  Lcom_yueyi_Game$: 1,
  O: 1
});
$c_Lcom_yueyi_Game$.prototype.$classData = $d_Lcom_yueyi_Game$;
var $n_Lcom_yueyi_Game$ = (void 0);
function $m_Lcom_yueyi_Game$() {
  if ((!$n_Lcom_yueyi_Game$)) {
    $n_Lcom_yueyi_Game$ = new $c_Lcom_yueyi_Game$()
  };
  return $n_Lcom_yueyi_Game$
}
/** @constructor */
function $c_Lwcgamelib_Canvas(canvas) {
  this.canvas$1 = null;
  this.canvas$1 = canvas
}
$c_Lwcgamelib_Canvas.prototype = new $h_O();
$c_Lwcgamelib_Canvas.prototype.constructor = $c_Lwcgamelib_Canvas;
/** @constructor */
function $h_Lwcgamelib_Canvas() {
  /*<skip>*/
}
$h_Lwcgamelib_Canvas.prototype = $c_Lwcgamelib_Canvas.prototype;
$c_Lwcgamelib_Canvas.prototype.getContext__T__Lwcgamelib_CanvasContext = (function(context) {
  return new $c_Lwcgamelib_CanvasContext(this.canvas$1.getContext(context))
});
$c_Lwcgamelib_Canvas.prototype.width__I = (function() {
  return $uI(this.canvas$1.width)
});
var $d_Lwcgamelib_Canvas = new $TypeData().initClass({
  Lwcgamelib_Canvas: 0
}, false, "wcgamelib.Canvas", {
  Lwcgamelib_Canvas: 1,
  O: 1
});
$c_Lwcgamelib_Canvas.prototype.$classData = $d_Lwcgamelib_Canvas;
/** @constructor */
function $c_Lwcgamelib_CanvasContext(context) {
  this.context$1 = null;
  this.context$1 = context
}
$c_Lwcgamelib_CanvasContext.prototype = new $h_O();
$c_Lwcgamelib_CanvasContext.prototype.constructor = $c_Lwcgamelib_CanvasContext;
/** @constructor */
function $h_Lwcgamelib_CanvasContext() {
  /*<skip>*/
}
$h_Lwcgamelib_CanvasContext.prototype = $c_Lwcgamelib_CanvasContext.prototype;
$c_Lwcgamelib_CanvasContext.prototype.fillRect__I__I__I__I__V = (function(a, b, c, d) {
  this.context$1.fillRect(a, b, c, d)
});
var $d_Lwcgamelib_CanvasContext = new $TypeData().initClass({
  Lwcgamelib_CanvasContext: 0
}, false, "wcgamelib.CanvasContext", {
  Lwcgamelib_CanvasContext: 1,
  O: 1
});
$c_Lwcgamelib_CanvasContext.prototype.$classData = $d_Lwcgamelib_CanvasContext;
/** @constructor */
function $c_Lwcgamelib_CanvasContext$$anon$1($$outer) {
  this.$$outer$1 = null;
  if (($$outer === null)) {
    throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    this.$$outer$1 = $$outer
  }
}
$c_Lwcgamelib_CanvasContext$$anon$1.prototype = new $h_O();
$c_Lwcgamelib_CanvasContext$$anon$1.prototype.constructor = $c_Lwcgamelib_CanvasContext$$anon$1;
/** @constructor */
function $h_Lwcgamelib_CanvasContext$$anon$1() {
  /*<skip>*/
}
$h_Lwcgamelib_CanvasContext$$anon$1.prototype = $c_Lwcgamelib_CanvasContext$$anon$1.prototype;
$c_Lwcgamelib_CanvasContext$$anon$1.prototype.$$colon$eq__T__V = (function(fillStyleStr) {
  this.$$outer$1.context$1.fillStyle = fillStyleStr
});
$c_Lwcgamelib_CanvasContext$$anon$1.prototype.$$colon$eq__T__ = (function(fillStyleStr) {
  this.$$colon$eq__T__V(fillStyleStr)
});
var $d_Lwcgamelib_CanvasContext$$anon$1 = new $TypeData().initClass({
  Lwcgamelib_CanvasContext$$anon$1: 0
}, false, "wcgamelib.CanvasContext$$anon$1", {
  Lwcgamelib_CanvasContext$$anon$1: 1,
  O: 1
});
$c_Lwcgamelib_CanvasContext$$anon$1.prototype.$classData = $d_Lwcgamelib_CanvasContext$$anon$1;
/** @constructor */
function $c_Lwcgamelib_wx$() {
  /*<skip>*/
}
$c_Lwcgamelib_wx$.prototype = new $h_O();
$c_Lwcgamelib_wx$.prototype.constructor = $c_Lwcgamelib_wx$;
/** @constructor */
function $h_Lwcgamelib_wx$() {
  /*<skip>*/
}
$h_Lwcgamelib_wx$.prototype = $c_Lwcgamelib_wx$.prototype;
$c_Lwcgamelib_wx$.prototype.createCanvas__Lwcgamelib_Canvas = (function() {
  return new $c_Lwcgamelib_Canvas(wx.createCanvas())
});
var $d_Lwcgamelib_wx$ = new $TypeData().initClass({
  Lwcgamelib_wx$: 0
}, false, "wcgamelib.wx$", {
  Lwcgamelib_wx$: 1,
  O: 1
});
$c_Lwcgamelib_wx$.prototype.$classData = $d_Lwcgamelib_wx$;
var $n_Lwcgamelib_wx$ = (void 0);
function $m_Lwcgamelib_wx$() {
  if ((!$n_Lwcgamelib_wx$)) {
    $n_Lwcgamelib_wx$ = new $c_Lwcgamelib_wx$()
  };
  return $n_Lwcgamelib_wx$
}
/** @constructor */
function $c_jl_Class(data0) {
  this.data$1 = null;
  this.data$1 = data0
}
$c_jl_Class.prototype = new $h_O();
$c_jl_Class.prototype.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
  /*<skip>*/
}
$h_jl_Class.prototype = $c_jl_Class.prototype;
$c_jl_Class.prototype.toString__T = (function() {
  return ((this.isInterface__Z() ? "interface " : (this.isPrimitive__Z() ? "" : "class ")) + this.getName__T())
});
$c_jl_Class.prototype.isInterface__Z = (function() {
  return $uZ(this.data$1.isInterface)
});
$c_jl_Class.prototype.isPrimitive__Z = (function() {
  return $uZ(this.data$1.isPrimitive)
});
$c_jl_Class.prototype.getName__T = (function() {
  return $as_T(this.data$1.name)
});
var $d_jl_Class = new $TypeData().initClass({
  jl_Class: 0
}, false, "java.lang.Class", {
  jl_Class: 1,
  O: 1
});
$c_jl_Class.prototype.$classData = $d_jl_Class;
function $p_jl_FloatingPointBits$__doubleToLongBitsPolyfill__D__J($thiz, value) {
  if ((value !== value)) {
    var _3 = $uD(Math.pow(2.0, 51.0));
    var x1_$_$$und1$1 = false;
    var x1_$_$$und2$1 = 2047;
    var x1_$_$$und3$1 = _3
  } else if (((value === Infinity) || (value === (-Infinity)))) {
    var _1 = (value < 0.0);
    var x1_$_$$und1$1 = _1;
    var x1_$_$$und2$1 = 2047;
    var x1_$_$$und3$1 = 0.0
  } else if ((value === 0.0)) {
    var _1$1 = ((1.0 / value) === (-Infinity));
    var x1_$_$$und1$1 = _1$1;
    var x1_$_$$und2$1 = 0;
    var x1_$_$$und3$1 = 0.0
  } else {
    var s = (value < 0.0);
    var av = (s ? (-value) : value);
    if ((av >= $uD(Math.pow(2.0, (-1022.0))))) {
      var twoPowFbits = $uD(Math.pow(2.0, 52.0));
      var a = ($uD(Math.log(av)) / 0.6931471805599453);
      var x = $uD(Math.floor(a));
      var a$1 = $uI((x | 0));
      var e = ((a$1 < 1023) ? a$1 : 1023);
      var b = e;
      var twoPowE = $uD(Math.pow(2.0, b));
      if ((twoPowE > av)) {
        e = (((-1) + e) | 0);
        twoPowE = (twoPowE / 2.0)
      };
      var n = ((av / twoPowE) * twoPowFbits);
      var w = $uD(Math.floor(n));
      var f = (n - w);
      var f$1 = ((f < 0.5) ? w : ((f > 0.5) ? (1.0 + w) : (((w % 2.0) !== 0.0) ? (1.0 + w) : w)));
      if (((f$1 / twoPowFbits) >= 2.0)) {
        e = ((1 + e) | 0);
        f$1 = 1.0
      };
      if ((e > 1023)) {
        e = 2047;
        f$1 = 0.0
      } else {
        e = ((1023 + e) | 0);
        f$1 = (f$1 - twoPowFbits)
      };
      var _2 = e;
      var _3$1 = f$1;
      var x1_$_$$und1$1 = s;
      var x1_$_$$und2$1 = _2;
      var x1_$_$$und3$1 = _3$1
    } else {
      var n$1 = (av / $uD(Math.pow(2.0, (-1074.0))));
      var w$1 = $uD(Math.floor(n$1));
      var f$2 = (n$1 - w$1);
      var _3$2 = ((f$2 < 0.5) ? w$1 : ((f$2 > 0.5) ? (1.0 + w$1) : (((w$1 % 2.0) !== 0.0) ? (1.0 + w$1) : w$1)));
      var x1_$_$$und1$1 = s;
      var x1_$_$$und2$1 = 0;
      var x1_$_$$und3$1 = _3$2
    }
  };
  var s$1 = $uZ(x1_$_$$und1$1);
  var e$1 = $uI(x1_$_$$und2$1);
  var f$3 = $uD(x1_$_$$und3$1);
  var x$1 = (f$3 / 4.294967296E9);
  var hif = $uI((x$1 | 0));
  var hi = (((s$1 ? (-2147483648) : 0) | (e$1 << 20)) | hif);
  var lo = $uI((f$3 | 0));
  return new $c_sjsr_RuntimeLong(lo, hi)
}
/** @constructor */
function $c_jl_FloatingPointBits$() {
  this.java$lang$FloatingPointBits$$$undareTypedArraysSupported$f = false;
  this.arrayBuffer$1 = null;
  this.int32Array$1 = null;
  this.float32Array$1 = null;
  this.float64Array$1 = null;
  this.areTypedArraysBigEndian$1 = false;
  this.highOffset$1 = 0;
  this.lowOffset$1 = 0;
  $n_jl_FloatingPointBits$ = this;
  this.java$lang$FloatingPointBits$$$undareTypedArraysSupported$f = (((($as_T((typeof ArrayBuffer)) !== "undefined") && ($as_T((typeof Int32Array)) !== "undefined")) && ($as_T((typeof Float32Array)) !== "undefined")) && ($as_T((typeof Float64Array)) !== "undefined"));
  this.arrayBuffer$1 = (this.java$lang$FloatingPointBits$$$undareTypedArraysSupported$f ? new ArrayBuffer(8) : null);
  this.int32Array$1 = (this.java$lang$FloatingPointBits$$$undareTypedArraysSupported$f ? new Int32Array(this.arrayBuffer$1, 0, 2) : null);
  this.float32Array$1 = (this.java$lang$FloatingPointBits$$$undareTypedArraysSupported$f ? new Float32Array(this.arrayBuffer$1, 0, 2) : null);
  this.float64Array$1 = (this.java$lang$FloatingPointBits$$$undareTypedArraysSupported$f ? new Float64Array(this.arrayBuffer$1, 0, 1) : null);
  if ((!this.java$lang$FloatingPointBits$$$undareTypedArraysSupported$f)) {
    var jsx$1 = true
  } else {
    this.int32Array$1[0] = 16909060;
    var jsx$1 = ($uB(new Int8Array(this.arrayBuffer$1, 0, 8)[0]) === 1)
  };
  this.areTypedArraysBigEndian$1 = jsx$1;
  this.highOffset$1 = (this.areTypedArraysBigEndian$1 ? 0 : 1);
  this.lowOffset$1 = (this.areTypedArraysBigEndian$1 ? 1 : 0)
}
$c_jl_FloatingPointBits$.prototype = new $h_O();
$c_jl_FloatingPointBits$.prototype.constructor = $c_jl_FloatingPointBits$;
/** @constructor */
function $h_jl_FloatingPointBits$() {
  /*<skip>*/
}
$h_jl_FloatingPointBits$.prototype = $c_jl_FloatingPointBits$.prototype;
$c_jl_FloatingPointBits$.prototype.numberHashCode__D__I = (function(value) {
  var iv = $uI((value | 0));
  if (((iv === value) && ((1.0 / value) !== (-Infinity)))) {
    return iv
  } else {
    var t = this.doubleToLongBits__D__J(value);
    var lo = t.lo$2;
    var hi = t.hi$2;
    return (lo ^ hi)
  }
});
$c_jl_FloatingPointBits$.prototype.doubleToLongBits__D__J = (function(value) {
  if (this.java$lang$FloatingPointBits$$$undareTypedArraysSupported$f) {
    this.float64Array$1[0] = value;
    var value$1 = $uI(this.int32Array$1[this.highOffset$1]);
    var value$2 = $uI(this.int32Array$1[this.lowOffset$1]);
    return new $c_sjsr_RuntimeLong(value$2, value$1)
  } else {
    return $p_jl_FloatingPointBits$__doubleToLongBitsPolyfill__D__J(this, value)
  }
});
var $d_jl_FloatingPointBits$ = new $TypeData().initClass({
  jl_FloatingPointBits$: 0
}, false, "java.lang.FloatingPointBits$", {
  jl_FloatingPointBits$: 1,
  O: 1
});
$c_jl_FloatingPointBits$.prototype.$classData = $d_jl_FloatingPointBits$;
var $n_jl_FloatingPointBits$ = (void 0);
function $m_jl_FloatingPointBits$() {
  if ((!$n_jl_FloatingPointBits$)) {
    $n_jl_FloatingPointBits$ = new $c_jl_FloatingPointBits$()
  };
  return $n_jl_FloatingPointBits$
}
function $f_jl_Void__hashCode__I($thiz) {
  return 0
}
function $f_jl_Void__toString__T($thiz) {
  return "undefined"
}
var $d_jl_Void = new $TypeData().initClass({
  jl_Void: 0
}, false, "java.lang.Void", {
  jl_Void: 1,
  O: 1
}, (void 0), (void 0), (function(x) {
  return (x === (void 0))
}));
function $p_s_util_hashing_MurmurHash3__avalanche__I__I($thiz, hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = $imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = $imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h
}
/** @constructor */
function $c_s_util_hashing_MurmurHash3() {
  /*<skip>*/
}
$c_s_util_hashing_MurmurHash3.prototype = new $h_O();
$c_s_util_hashing_MurmurHash3.prototype.constructor = $c_s_util_hashing_MurmurHash3;
/** @constructor */
function $h_s_util_hashing_MurmurHash3() {
  /*<skip>*/
}
$h_s_util_hashing_MurmurHash3.prototype = $c_s_util_hashing_MurmurHash3.prototype;
$c_s_util_hashing_MurmurHash3.prototype.mix__I__I__I = (function(hash, data) {
  var h = this.mixLast__I__I__I(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return (((-430675100) + $imul(5, h)) | 0)
});
$c_s_util_hashing_MurmurHash3.prototype.mixLast__I__I__I = (function(hash, data) {
  var k = data;
  k = $imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = $imul(461845907, k);
  return (hash ^ k)
});
$c_s_util_hashing_MurmurHash3.prototype.finalizeHash__I__I__I = (function(hash, length) {
  return $p_s_util_hashing_MurmurHash3__avalanche__I__I(this, (hash ^ length))
});
$c_s_util_hashing_MurmurHash3.prototype.productHash__s_Product__I__I = (function(x, seed) {
  var arr = x.productArity__I();
  if ((arr === 0)) {
    return $f_T__hashCode__I(x.productPrefix__T())
  } else {
    var h = seed;
    var i = 0;
    while ((i < arr)) {
      h = this.mix__I__I__I(h, $m_sr_Statics$().anyHash__O__I(x.productElement__I__O(i)));
      i = ((1 + i) | 0)
    };
    return this.finalizeHash__I__I__I(h, arr)
  }
});
/** @constructor */
function $c_sjsr_package$() {
  /*<skip>*/
}
$c_sjsr_package$.prototype = new $h_O();
$c_sjsr_package$.prototype.constructor = $c_sjsr_package$;
/** @constructor */
function $h_sjsr_package$() {
  /*<skip>*/
}
$h_sjsr_package$.prototype = $c_sjsr_package$.prototype;
$c_sjsr_package$.prototype.wrapJavaScriptException__O__jl_Throwable = (function(e) {
  if ($is_jl_Throwable(e)) {
    var x2 = $as_jl_Throwable(e);
    return x2
  } else {
    return new $c_sjs_js_JavaScriptException(e)
  }
});
$c_sjsr_package$.prototype.unwrapJavaScriptException__jl_Throwable__O = (function(th) {
  if ($is_sjs_js_JavaScriptException(th)) {
    var x2 = $as_sjs_js_JavaScriptException(th);
    var e = x2.exception$4;
    return e
  } else {
    return th
  }
});
var $d_sjsr_package$ = new $TypeData().initClass({
  sjsr_package$: 0
}, false, "scala.scalajs.runtime.package$", {
  sjsr_package$: 1,
  O: 1
});
$c_sjsr_package$.prototype.$classData = $d_sjsr_package$;
var $n_sjsr_package$ = (void 0);
function $m_sjsr_package$() {
  if ((!$n_sjsr_package$)) {
    $n_sjsr_package$ = new $c_sjsr_package$()
  };
  return $n_sjsr_package$
}
/** @constructor */
function $c_sr_Statics$() {
  /*<skip>*/
}
$c_sr_Statics$.prototype = new $h_O();
$c_sr_Statics$.prototype.constructor = $c_sr_Statics$;
/** @constructor */
function $h_sr_Statics$() {
  /*<skip>*/
}
$h_sr_Statics$.prototype = $c_sr_Statics$.prototype;
$c_sr_Statics$.prototype.longHash__J__I = (function(lv) {
  var lo = lv.lo$2;
  var lo$1 = lv.hi$2;
  return ((lo$1 === (lo >> 31)) ? lo : (lo ^ lo$1))
});
$c_sr_Statics$.prototype.doubleHash__D__I = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv
  } else {
    var this$1 = $m_sjsr_RuntimeLong$();
    var lo = this$1.scala$scalajs$runtime$RuntimeLong$$fromDoubleImpl__D__I(dv);
    var hi = this$1.scala$scalajs$runtime$RuntimeLong$$hiReturn$f;
    return (($m_sjsr_RuntimeLong$().scala$scalajs$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi) === dv) ? (lo ^ hi) : $m_jl_FloatingPointBits$().numberHashCode__D__I(dv))
  }
});
$c_sr_Statics$.prototype.anyHash__O__I = (function(x) {
  if ((x === null)) {
    return 0
  } else if (((typeof x) === "number")) {
    var x3 = $uD(x);
    return this.doubleHash__D__I(x3)
  } else if ($is_sjsr_RuntimeLong(x)) {
    var t = $uJ(x);
    var lo = t.lo$2;
    var hi = t.hi$2;
    return this.longHash__J__I(new $c_sjsr_RuntimeLong(lo, hi))
  } else {
    return $dp_hashCode__I(x)
  }
});
var $d_sr_Statics$ = new $TypeData().initClass({
  sr_Statics$: 0
}, false, "scala.runtime.Statics$", {
  sr_Statics$: 1,
  O: 1
});
$c_sr_Statics$.prototype.$classData = $d_sr_Statics$;
var $n_sr_Statics$ = (void 0);
function $m_sr_Statics$() {
  if ((!$n_sr_Statics$)) {
    $n_sr_Statics$ = new $c_sr_Statics$()
  };
  return $n_sr_Statics$
}
/** @constructor */
function $c_jl_Number() {
  /*<skip>*/
}
$c_jl_Number.prototype = new $h_O();
$c_jl_Number.prototype.constructor = $c_jl_Number;
/** @constructor */
function $h_jl_Number() {
  /*<skip>*/
}
$h_jl_Number.prototype = $c_jl_Number.prototype;
function $ct_jl_Throwable__init___T__jl_Throwable__Z__Z($thiz, s, e, enableSuppression, writableStackTrace) {
  $thiz.s$1 = s;
  $thiz.e$1 = e;
  $thiz.enableSuppression$1 = enableSuppression;
  $thiz.writableStackTrace$1 = writableStackTrace;
  if (writableStackTrace) {
    $thiz.fillInStackTrace__jl_Throwable()
  };
  return $thiz
}
/** @constructor */
function $c_jl_Throwable() {
  this.s$1 = null;
  this.e$1 = null;
  this.enableSuppression$1 = false;
  this.writableStackTrace$1 = false;
  this.stackTraceStateInternal$1 = null;
  this.stackTrace$1 = null;
  this.suppressed$1 = null
}
/** @constructor */
function $hh_jl_Throwable() {
  /*<skip>*/
}
$hh_jl_Throwable.prototype = Error.prototype;
$c_jl_Throwable.prototype = new $hh_jl_Throwable();
$c_jl_Throwable.prototype.constructor = $c_jl_Throwable;
/** @constructor */
function $h_jl_Throwable() {
  /*<skip>*/
}
$h_jl_Throwable.prototype = $c_jl_Throwable.prototype;
$c_jl_Throwable.prototype.getMessage__T = (function() {
  return this.s$1
});
$c_jl_Throwable.prototype.fillInStackTrace__jl_Throwable = (function() {
  var identifyingString = Object.prototype.toString.call(this);
  if ((identifyingString === "[object Error]")) {
    this.stackTraceStateInternal$1 = this
  } else {
    var v = Error.captureStackTrace;
    if ((v === (void 0))) {
      try {
        var e$1 = {}.undef()
      } catch (e) {
        var e$2 = $m_sjsr_package$().wrapJavaScriptException__O__jl_Throwable(e);
        if ((e$2 !== null)) {
          if ($is_sjs_js_JavaScriptException(e$2)) {
            var x5 = $as_sjs_js_JavaScriptException(e$2);
            var e$3 = x5.exception$4;
            var e$1 = e$3
          } else {
            var e$1;
            throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(e$2)
          }
        } else {
          var e$1;
          throw e
        }
      };
      this.stackTraceStateInternal$1 = e$1
    } else {
      Error.captureStackTrace(this);
      this.stackTraceStateInternal$1 = this
    }
  };
  return this
});
$c_jl_Throwable.prototype.toString__T = (function() {
  var className = $objectGetClass(this).getName__T();
  var message = this.getMessage__T();
  return ((message === null) ? className : ((className + ": ") + message))
});
$c_jl_Throwable.prototype.$$js$exported$meth$toString__O = (function() {
  return this.toString__T()
});
$c_jl_Throwable.prototype.$$js$exported$prop$name__O = (function() {
  return $objectGetClass(this).getName__T()
});
$c_jl_Throwable.prototype.$$js$exported$prop$message__O = (function() {
  var m = this.getMessage__T();
  return ((m === null) ? "" : m)
});
$c_jl_Throwable.prototype.hashCode__I = (function() {
  return $c_O.prototype.hashCode__I.call(this)
});
Object.defineProperty($c_jl_Throwable.prototype, "message", {
  "get": (function() {
    return this.$$js$exported$prop$message__O()
  }),
  "configurable": true
});
Object.defineProperty($c_jl_Throwable.prototype, "name", {
  "get": (function() {
    return this.$$js$exported$prop$name__O()
  }),
  "configurable": true
});
$c_jl_Throwable.prototype.toString = (function() {
  return this.$$js$exported$meth$toString__O()
});
function $is_jl_Throwable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.jl_Throwable)))
}
function $as_jl_Throwable(obj) {
  return (($is_jl_Throwable(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Throwable"))
}
function $isArrayOf_jl_Throwable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Throwable)))
}
function $asArrayOf_jl_Throwable(obj, depth) {
  return (($isArrayOf_jl_Throwable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Throwable;", depth))
}
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.seqSeed$2 = 0;
  this.mapSeed$2 = 0;
  this.setSeed$2 = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.seqSeed$2 = $f_T__hashCode__I("Seq");
  this.mapSeed$2 = $f_T__hashCode__I("Map");
  this.setSeed$2 = $f_T__hashCode__I("Set")
}
$c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$c_s_util_hashing_MurmurHash3$.prototype.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
  /*<skip>*/
}
$h_s_util_hashing_MurmurHash3$.prototype = $c_s_util_hashing_MurmurHash3$.prototype;
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().initClass({
  s_util_hashing_MurmurHash3$: 0
}, false, "scala.util.hashing.MurmurHash3$", {
  s_util_hashing_MurmurHash3$: 1,
  s_util_hashing_MurmurHash3: 1,
  O: 1
});
$c_s_util_hashing_MurmurHash3$.prototype.$classData = $d_s_util_hashing_MurmurHash3$;
var $n_s_util_hashing_MurmurHash3$ = (void 0);
function $m_s_util_hashing_MurmurHash3$() {
  if ((!$n_s_util_hashing_MurmurHash3$)) {
    $n_s_util_hashing_MurmurHash3$ = new $c_s_util_hashing_MurmurHash3$()
  };
  return $n_s_util_hashing_MurmurHash3$
}
function $f_jl_Boolean__hashCode__I($thiz) {
  return ($uZ($thiz) ? 1231 : 1237)
}
function $f_jl_Boolean__toString__T($thiz) {
  var b = $uZ($thiz);
  return ("" + b)
}
var $d_jl_Boolean = new $TypeData().initClass({
  jl_Boolean: 0
}, false, "java.lang.Boolean", {
  jl_Boolean: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), (function(x) {
  return ((typeof x) === "boolean")
}));
function $f_jl_Character__hashCode__I($thiz) {
  return $uC($thiz)
}
function $f_jl_Character__toString__T($thiz) {
  var c = $uC($thiz);
  return $as_T(String.fromCharCode(c))
}
var $d_jl_Character = new $TypeData().initClass({
  jl_Character: 0
}, false, "java.lang.Character", {
  jl_Character: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), (function(x) {
  return (x instanceof $Char)
}));
/** @constructor */
function $c_jl_Error() {
  this.s$1 = null;
  this.e$1 = null;
  this.enableSuppression$1 = false;
  this.writableStackTrace$1 = false;
  this.stackTraceStateInternal$1 = null;
  this.stackTrace$1 = null;
  this.suppressed$1 = null
}
$c_jl_Error.prototype = new $h_jl_Throwable();
$c_jl_Error.prototype.constructor = $c_jl_Error;
/** @constructor */
function $h_jl_Error() {
  /*<skip>*/
}
$h_jl_Error.prototype = $c_jl_Error.prototype;
/** @constructor */
function $c_jl_Exception() {
  this.s$1 = null;
  this.e$1 = null;
  this.enableSuppression$1 = false;
  this.writableStackTrace$1 = false;
  this.stackTraceStateInternal$1 = null;
  this.stackTrace$1 = null;
  this.suppressed$1 = null
}
$c_jl_Exception.prototype = new $h_jl_Throwable();
$c_jl_Exception.prototype.constructor = $c_jl_Exception;
/** @constructor */
function $h_jl_Exception() {
  /*<skip>*/
}
$h_jl_Exception.prototype = $c_jl_Exception.prototype;
function $p_sjsr_RuntimeLong$__toUnsignedString__I__I__T($thiz, lo, hi) {
  if ((((-2097152) & hi) === 0)) {
    var this$3 = ((4.294967296E9 * hi) + $uD((lo >>> 0)));
    return ("" + this$3)
  } else {
    return $as_T($p_sjsr_RuntimeLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, lo, hi, 1000000000, 0, 2))
  }
}
function $p_sjsr_RuntimeLong$__unsigned$und$div__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      var aDouble = ((4.294967296E9 * ahi) + $uD((alo >>> 0)));
      var bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0)));
      var rDouble = (aDouble / bDouble);
      var x = (rDouble / 4.294967296E9);
      $thiz.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = $uI((x | 0));
      return $uI((rDouble | 0))
    } else {
      $thiz.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = 0;
      return 0
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    var pow = ((31 - $clz32(blo)) | 0);
    $thiz.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = ((ahi >>> pow) | 0);
    return (((alo >>> pow) | 0) | ((ahi << 1) << ((31 - pow) | 0)))
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    var pow$2 = ((31 - $clz32(bhi)) | 0);
    $thiz.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = 0;
    return ((ahi >>> pow$2) | 0)
  } else {
    return $uI($p_sjsr_RuntimeLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 0))
  }
}
function $p_sjsr_RuntimeLong$__unsigned$und$percent__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      var aDouble = ((4.294967296E9 * ahi) + $uD((alo >>> 0)));
      var bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0)));
      var rDouble = (aDouble % bDouble);
      var x = (rDouble / 4.294967296E9);
      $thiz.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = $uI((x | 0));
      return $uI((rDouble | 0))
    } else {
      $thiz.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = ahi;
      return alo
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    $thiz.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = 0;
    return (alo & (((-1) + blo) | 0))
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    $thiz.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = (ahi & (((-1) + bhi) | 0));
    return alo
  } else {
    return $uI($p_sjsr_RuntimeLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 1))
  }
}
function $p_sjsr_RuntimeLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, ask) {
  var shift = ((((bhi !== 0) ? $clz32(bhi) : ((32 + $clz32(blo)) | 0)) - ((ahi !== 0) ? $clz32(ahi) : ((32 + $clz32(alo)) | 0))) | 0);
  var n = shift;
  var lo = (((32 & n) === 0) ? (blo << n) : 0);
  var hi = (((32 & n) === 0) ? (((((blo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (bhi << n)) : (blo << n));
  var bShiftLo = lo;
  var bShiftHi = hi;
  var remLo = alo;
  var remHi = ahi;
  var quotLo = 0;
  var quotHi = 0;
  while (((shift >= 0) && (((-2097152) & remHi) !== 0))) {
    var alo$1 = remLo;
    var ahi$1 = remHi;
    var blo$1 = bShiftLo;
    var bhi$1 = bShiftHi;
    if (((ahi$1 === bhi$1) ? (((-2147483648) ^ alo$1) >= ((-2147483648) ^ blo$1)) : (((-2147483648) ^ ahi$1) >= ((-2147483648) ^ bhi$1)))) {
      var lo$1 = remLo;
      var hi$1 = remHi;
      var lo$2 = bShiftLo;
      var hi$2 = bShiftHi;
      var lo$3 = ((lo$1 - lo$2) | 0);
      var hi$3 = ((((-2147483648) ^ lo$3) > ((-2147483648) ^ lo$1)) ? (((-1) + ((hi$1 - hi$2) | 0)) | 0) : ((hi$1 - hi$2) | 0));
      remLo = lo$3;
      remHi = hi$3;
      if ((shift < 32)) {
        quotLo = (quotLo | (1 << shift))
      } else {
        quotHi = (quotHi | (1 << shift))
      }
    };
    shift = (((-1) + shift) | 0);
    var lo$4 = bShiftLo;
    var hi$4 = bShiftHi;
    var lo$5 = (((lo$4 >>> 1) | 0) | (hi$4 << 31));
    var hi$5 = ((hi$4 >>> 1) | 0);
    bShiftLo = lo$5;
    bShiftHi = hi$5
  };
  var alo$2 = remLo;
  var ahi$2 = remHi;
  if (((ahi$2 === bhi) ? (((-2147483648) ^ alo$2) >= ((-2147483648) ^ blo)) : (((-2147483648) ^ ahi$2) >= ((-2147483648) ^ bhi)))) {
    var lo$6 = remLo;
    var hi$6 = remHi;
    var remDouble = ((4.294967296E9 * hi$6) + $uD((lo$6 >>> 0)));
    var bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0)));
    if ((ask !== 1)) {
      var x = (remDouble / bDouble);
      var lo$7 = $uI((x | 0));
      var x$1 = (x / 4.294967296E9);
      var hi$7 = $uI((x$1 | 0));
      var lo$8 = quotLo;
      var hi$8 = quotHi;
      var lo$9 = ((lo$8 + lo$7) | 0);
      var hi$9 = ((((-2147483648) ^ lo$9) < ((-2147483648) ^ lo$8)) ? ((1 + ((hi$8 + hi$7) | 0)) | 0) : ((hi$8 + hi$7) | 0));
      quotLo = lo$9;
      quotHi = hi$9
    };
    if ((ask !== 0)) {
      var rem_mod_bDouble = (remDouble % bDouble);
      remLo = $uI((rem_mod_bDouble | 0));
      var x$2 = (rem_mod_bDouble / 4.294967296E9);
      remHi = $uI((x$2 | 0))
    }
  };
  if ((ask === 0)) {
    $thiz.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = quotHi;
    return quotLo
  } else if ((ask === 1)) {
    $thiz.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = remHi;
    return remLo
  } else {
    var lo$10 = quotLo;
    var hi$10 = quotHi;
    var quot = ((4.294967296E9 * hi$10) + $uD((lo$10 >>> 0)));
    var this$13 = remLo;
    var remStr = ("" + this$13);
    var start = $uI(remStr.length);
    return ((("" + quot) + $as_T("000000000".substring(start))) + remStr)
  }
}
/** @constructor */
function $c_sjsr_RuntimeLong$() {
  this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = 0
}
$c_sjsr_RuntimeLong$.prototype = new $h_O();
$c_sjsr_RuntimeLong$.prototype.constructor = $c_sjsr_RuntimeLong$;
/** @constructor */
function $h_sjsr_RuntimeLong$() {
  /*<skip>*/
}
$h_sjsr_RuntimeLong$.prototype = $c_sjsr_RuntimeLong$.prototype;
$c_sjsr_RuntimeLong$.prototype.scala$scalajs$runtime$RuntimeLong$$toString__I__I__T = (function(lo, hi) {
  return ((hi === (lo >> 31)) ? ("" + lo) : ((hi < 0) ? ("-" + $p_sjsr_RuntimeLong$__toUnsignedString__I__I__T(this, ((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)))) : $p_sjsr_RuntimeLong$__toUnsignedString__I__I__T(this, lo, hi)))
});
$c_sjsr_RuntimeLong$.prototype.scala$scalajs$runtime$RuntimeLong$$toDouble__I__I__D = (function(lo, hi) {
  if ((hi < 0)) {
    var x = ((lo !== 0) ? (~hi) : ((-hi) | 0));
    var jsx$1 = $uD((x >>> 0));
    var x$1 = ((-lo) | 0);
    return (-((4.294967296E9 * jsx$1) + $uD((x$1 >>> 0))))
  } else {
    return ((4.294967296E9 * hi) + $uD((lo >>> 0)))
  }
});
$c_sjsr_RuntimeLong$.prototype.fromInt__I__sjsr_RuntimeLong = (function(value) {
  return new $c_sjsr_RuntimeLong(value, (value >> 31))
});
$c_sjsr_RuntimeLong$.prototype.fromDouble__D__sjsr_RuntimeLong = (function(value) {
  var lo = this.scala$scalajs$runtime$RuntimeLong$$fromDoubleImpl__D__I(value);
  return new $c_sjsr_RuntimeLong(lo, this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f)
});
$c_sjsr_RuntimeLong$.prototype.scala$scalajs$runtime$RuntimeLong$$fromDoubleImpl__D__I = (function(value) {
  if ((value < (-9.223372036854776E18))) {
    this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = (-2147483648);
    return 0
  } else if ((value >= 9.223372036854776E18)) {
    this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = 2147483647;
    return (-1)
  } else {
    var rawLo = $uI((value | 0));
    var x = (value / 4.294967296E9);
    var rawHi = $uI((x | 0));
    this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = (((value < 0.0) && (rawLo !== 0)) ? (((-1) + rawHi) | 0) : rawHi);
    return rawLo
  }
});
$c_sjsr_RuntimeLong$.prototype.scala$scalajs$runtime$RuntimeLong$$compare__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo === blo) ? 0 : ((((-2147483648) ^ alo) < ((-2147483648) ^ blo)) ? (-1) : 1)) : ((ahi < bhi) ? (-1) : 1))
});
$c_sjsr_RuntimeLong$.prototype.divideImpl__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw $ct_jl_ArithmeticException__init___T(new $c_jl_ArithmeticException(), "/ by zero")
  };
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      if (((alo === (-2147483648)) && (blo === (-1)))) {
        this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = 0;
        return (-2147483648)
      } else {
        var lo = $intDiv(alo, blo);
        this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = (lo >> 31);
        return lo
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = (-1);
      return (-1)
    } else {
      this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = 0;
      return 0
    }
  } else {
    if ((ahi < 0)) {
      var lo$1 = ((-alo) | 0);
      var hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
      var aAbs_$_lo$2 = lo$1;
      var aAbs_$_hi$2 = hi
    } else {
      var aAbs_$_lo$2 = alo;
      var aAbs_$_hi$2 = ahi
    };
    if ((bhi < 0)) {
      var lo$2 = ((-blo) | 0);
      var hi$1 = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
      var bAbs_$_lo$2 = lo$2;
      var bAbs_$_hi$2 = hi$1
    } else {
      var bAbs_$_lo$2 = blo;
      var bAbs_$_hi$2 = bhi
    };
    var absRLo = $p_sjsr_RuntimeLong$__unsigned$und$div__I__I__I__I__I(this, aAbs_$_lo$2, aAbs_$_hi$2, bAbs_$_lo$2, bAbs_$_hi$2);
    if (((ahi ^ bhi) >= 0)) {
      return absRLo
    } else {
      var hi$2 = this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f;
      this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
      return ((-absRLo) | 0)
    }
  }
});
$c_sjsr_RuntimeLong$.prototype.remainderImpl__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw $ct_jl_ArithmeticException__init___T(new $c_jl_ArithmeticException(), "/ by zero")
  };
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      if ((blo !== (-1))) {
        var lo = $intMod(alo, blo);
        this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = (lo >> 31);
        return lo
      } else {
        this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = 0;
        return 0
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = 0;
      return 0
    } else {
      this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = ahi;
      return alo
    }
  } else {
    if ((ahi < 0)) {
      var lo$1 = ((-alo) | 0);
      var hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
      var aAbs_$_lo$2 = lo$1;
      var aAbs_$_hi$2 = hi
    } else {
      var aAbs_$_lo$2 = alo;
      var aAbs_$_hi$2 = ahi
    };
    if ((bhi < 0)) {
      var lo$2 = ((-blo) | 0);
      var hi$1 = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
      var bAbs_$_lo$2 = lo$2;
      var bAbs_$_hi$2 = hi$1
    } else {
      var bAbs_$_lo$2 = blo;
      var bAbs_$_hi$2 = bhi
    };
    var absRLo = $p_sjsr_RuntimeLong$__unsigned$und$percent__I__I__I__I__I(this, aAbs_$_lo$2, aAbs_$_hi$2, bAbs_$_lo$2, bAbs_$_hi$2);
    if ((ahi < 0)) {
      var hi$2 = this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f;
      this.scala$scalajs$runtime$RuntimeLong$$hiReturn$f = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
      return ((-absRLo) | 0)
    } else {
      return absRLo
    }
  }
});
var $d_sjsr_RuntimeLong$ = new $TypeData().initClass({
  sjsr_RuntimeLong$: 0
}, false, "scala.scalajs.runtime.RuntimeLong$", {
  sjsr_RuntimeLong$: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sjsr_RuntimeLong$.prototype.$classData = $d_sjsr_RuntimeLong$;
var $n_sjsr_RuntimeLong$ = (void 0);
function $m_sjsr_RuntimeLong$() {
  if ((!$n_sjsr_RuntimeLong$)) {
    $n_sjsr_RuntimeLong$ = new $c_sjsr_RuntimeLong$()
  };
  return $n_sjsr_RuntimeLong$
}
function $f_T__hashCode__I($thiz) {
  var res = 0;
  var mul = 1;
  var i = (((-1) + $uI($thiz.length)) | 0);
  while ((i >= 0)) {
    var jsx$1 = res;
    var index = i;
    res = ((jsx$1 + $imul((65535 & $uI($thiz.charCodeAt(index))), mul)) | 0);
    mul = $imul(31, mul);
    i = (((-1) + i) | 0)
  };
  return res
}
function $f_T__toString__T($thiz) {
  return $thiz
}
function $is_T(obj) {
  return ((typeof obj) === "string")
}
function $as_T(obj) {
  return (($is_T(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.String"))
}
function $isArrayOf_T(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.T)))
}
function $asArrayOf_T(obj, depth) {
  return (($isArrayOf_T(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.String;", depth))
}
var $d_T = new $TypeData().initClass({
  T: 0
}, false, "java.lang.String", {
  T: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_CharSequence: 1
}, (void 0), (void 0), $is_T);
function $f_jl_Byte__hashCode__I($thiz) {
  return $uB($thiz)
}
function $f_jl_Byte__toString__T($thiz) {
  var b = $uB($thiz);
  return ("" + b)
}
var $d_jl_Byte = new $TypeData().initClass({
  jl_Byte: 0
}, false, "java.lang.Byte", {
  jl_Byte: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), (function(x) {
  return $isByte(x)
}));
function $ct_jl_CloneNotSupportedException__init___($thiz) {
  $ct_jl_Throwable__init___T__jl_Throwable__Z__Z($thiz, null, null, true, true);
  return $thiz
}
/** @constructor */
function $c_jl_CloneNotSupportedException() {
  this.s$1 = null;
  this.e$1 = null;
  this.enableSuppression$1 = false;
  this.writableStackTrace$1 = false;
  this.stackTraceStateInternal$1 = null;
  this.stackTrace$1 = null;
  this.suppressed$1 = null
}
$c_jl_CloneNotSupportedException.prototype = new $h_jl_Exception();
$c_jl_CloneNotSupportedException.prototype.constructor = $c_jl_CloneNotSupportedException;
/** @constructor */
function $h_jl_CloneNotSupportedException() {
  /*<skip>*/
}
$h_jl_CloneNotSupportedException.prototype = $c_jl_CloneNotSupportedException.prototype;
var $d_jl_CloneNotSupportedException = new $TypeData().initClass({
  jl_CloneNotSupportedException: 0
}, false, "java.lang.CloneNotSupportedException", {
  jl_CloneNotSupportedException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_CloneNotSupportedException.prototype.$classData = $d_jl_CloneNotSupportedException;
function $f_jl_Double__hashCode__I($thiz) {
  var value = $uD($thiz);
  return $m_jl_FloatingPointBits$().numberHashCode__D__I(value)
}
function $f_jl_Double__toString__T($thiz) {
  var d = $uD($thiz);
  return ("" + d)
}
function $isArrayOf_jl_Double(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Double)))
}
function $asArrayOf_jl_Double(obj, depth) {
  return (($isArrayOf_jl_Double(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Double;", depth))
}
var $d_jl_Double = new $TypeData().initClass({
  jl_Double: 0
}, false, "java.lang.Double", {
  jl_Double: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), (function(x) {
  return ((typeof x) === "number")
}));
function $f_jl_Float__hashCode__I($thiz) {
  var value = $uF($thiz);
  return $m_jl_FloatingPointBits$().numberHashCode__D__I(value)
}
function $f_jl_Float__toString__T($thiz) {
  var f = $uF($thiz);
  return ("" + f)
}
var $d_jl_Float = new $TypeData().initClass({
  jl_Float: 0
}, false, "java.lang.Float", {
  jl_Float: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), (function(x) {
  return ((typeof x) === "number")
}));
function $f_jl_Integer__hashCode__I($thiz) {
  return $uI($thiz)
}
function $f_jl_Integer__toString__T($thiz) {
  var i = $uI($thiz);
  return ("" + i)
}
var $d_jl_Integer = new $TypeData().initClass({
  jl_Integer: 0
}, false, "java.lang.Integer", {
  jl_Integer: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), (function(x) {
  return $isInt(x)
}));
function $f_jl_Long__hashCode__I($thiz) {
  var t = $uJ($thiz);
  var lo = t.lo$2;
  var hi = t.hi$2;
  return (lo ^ hi)
}
function $f_jl_Long__toString__T($thiz) {
  var t = $uJ($thiz);
  var lo = t.lo$2;
  var hi = t.hi$2;
  return $m_sjsr_RuntimeLong$().scala$scalajs$runtime$RuntimeLong$$toString__I__I__T(lo, hi)
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Long)))
}
function $asArrayOf_jl_Long(obj, depth) {
  return (($isArrayOf_jl_Long(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Long;", depth))
}
var $d_jl_Long = new $TypeData().initClass({
  jl_Long: 0
}, false, "java.lang.Long", {
  jl_Long: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), (function(x) {
  return $is_sjsr_RuntimeLong(x)
}));
/** @constructor */
function $c_jl_RuntimeException() {
  this.s$1 = null;
  this.e$1 = null;
  this.enableSuppression$1 = false;
  this.writableStackTrace$1 = false;
  this.stackTraceStateInternal$1 = null;
  this.stackTrace$1 = null;
  this.suppressed$1 = null
}
$c_jl_RuntimeException.prototype = new $h_jl_Exception();
$c_jl_RuntimeException.prototype.constructor = $c_jl_RuntimeException;
/** @constructor */
function $h_jl_RuntimeException() {
  /*<skip>*/
}
$h_jl_RuntimeException.prototype = $c_jl_RuntimeException.prototype;
function $f_jl_Short__hashCode__I($thiz) {
  return $uS($thiz)
}
function $f_jl_Short__toString__T($thiz) {
  var s = $uS($thiz);
  return ("" + s)
}
var $d_jl_Short = new $TypeData().initClass({
  jl_Short: 0
}, false, "java.lang.Short", {
  jl_Short: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), (function(x) {
  return $isShort(x)
}));
/** @constructor */
function $c_jl_VirtualMachineError() {
  this.s$1 = null;
  this.e$1 = null;
  this.enableSuppression$1 = false;
  this.writableStackTrace$1 = false;
  this.stackTraceStateInternal$1 = null;
  this.stackTrace$1 = null;
  this.suppressed$1 = null
}
$c_jl_VirtualMachineError.prototype = new $h_jl_Error();
$c_jl_VirtualMachineError.prototype.constructor = $c_jl_VirtualMachineError;
/** @constructor */
function $h_jl_VirtualMachineError() {
  /*<skip>*/
}
$h_jl_VirtualMachineError.prototype = $c_jl_VirtualMachineError.prototype;
/** @constructor */
function $c_sjsr_RuntimeLong(lo, hi) {
  this.lo$2 = 0;
  this.hi$2 = 0;
  this.lo$2 = lo;
  this.hi$2 = hi
}
$c_sjsr_RuntimeLong.prototype = new $h_jl_Number();
$c_sjsr_RuntimeLong.prototype.constructor = $c_sjsr_RuntimeLong;
/** @constructor */
function $h_sjsr_RuntimeLong() {
  /*<skip>*/
}
$h_sjsr_RuntimeLong.prototype = $c_sjsr_RuntimeLong.prototype;
$c_sjsr_RuntimeLong.prototype.equals__O__Z = (function(that) {
  if ($is_sjsr_RuntimeLong(that)) {
    var x2 = $as_sjsr_RuntimeLong(that);
    return ((this.lo$2 === x2.lo$2) && (this.hi$2 === x2.hi$2))
  } else {
    return false
  }
});
$c_sjsr_RuntimeLong.prototype.hashCode__I = (function() {
  return (this.lo$2 ^ this.hi$2)
});
$c_sjsr_RuntimeLong.prototype.toString__T = (function() {
  return $m_sjsr_RuntimeLong$().scala$scalajs$runtime$RuntimeLong$$toString__I__I__T(this.lo$2, this.hi$2)
});
$c_sjsr_RuntimeLong.prototype.toInt__I = (function() {
  return this.lo$2
});
$c_sjsr_RuntimeLong.prototype.toDouble__D = (function() {
  return $m_sjsr_RuntimeLong$().scala$scalajs$runtime$RuntimeLong$$toDouble__I__I__D(this.lo$2, this.hi$2)
});
$c_sjsr_RuntimeLong.prototype.byteValue__B = (function() {
  return ((this.lo$2 << 24) >> 24)
});
$c_sjsr_RuntimeLong.prototype.shortValue__S = (function() {
  return ((this.lo$2 << 16) >> 16)
});
$c_sjsr_RuntimeLong.prototype.intValue__I = (function() {
  return this.lo$2
});
$c_sjsr_RuntimeLong.prototype.longValue__J = (function() {
  return $uJ(this)
});
$c_sjsr_RuntimeLong.prototype.floatValue__F = (function() {
  return $fround($m_sjsr_RuntimeLong$().scala$scalajs$runtime$RuntimeLong$$toDouble__I__I__D(this.lo$2, this.hi$2))
});
$c_sjsr_RuntimeLong.prototype.doubleValue__D = (function() {
  return $m_sjsr_RuntimeLong$().scala$scalajs$runtime$RuntimeLong$$toDouble__I__I__D(this.lo$2, this.hi$2)
});
$c_sjsr_RuntimeLong.prototype.compareTo__jl_Long__I = (function(that) {
  return $m_sjsr_RuntimeLong$().scala$scalajs$runtime$RuntimeLong$$compare__I__I__I__I__I(this.lo$2, this.hi$2, that.lo$2, that.hi$2)
});
$c_sjsr_RuntimeLong.prototype.equals__sjsr_RuntimeLong__Z = (function(b) {
  return ((this.lo$2 === b.lo$2) && (this.hi$2 === b.hi$2))
});
$c_sjsr_RuntimeLong.prototype.notEquals__sjsr_RuntimeLong__Z = (function(b) {
  return (!((this.lo$2 === b.lo$2) && (this.hi$2 === b.hi$2)))
});
$c_sjsr_RuntimeLong.prototype.$$less__sjsr_RuntimeLong__Z = (function(b) {
  var ahi = this.hi$2;
  var bhi = b.hi$2;
  return ((ahi === bhi) ? (((-2147483648) ^ this.lo$2) < ((-2147483648) ^ b.lo$2)) : (ahi < bhi))
});
$c_sjsr_RuntimeLong.prototype.$$less$eq__sjsr_RuntimeLong__Z = (function(b) {
  var ahi = this.hi$2;
  var bhi = b.hi$2;
  return ((ahi === bhi) ? (((-2147483648) ^ this.lo$2) <= ((-2147483648) ^ b.lo$2)) : (ahi < bhi))
});
$c_sjsr_RuntimeLong.prototype.$$greater__sjsr_RuntimeLong__Z = (function(b) {
  var ahi = this.hi$2;
  var bhi = b.hi$2;
  return ((ahi === bhi) ? (((-2147483648) ^ this.lo$2) > ((-2147483648) ^ b.lo$2)) : (ahi > bhi))
});
$c_sjsr_RuntimeLong.prototype.$$greater$eq__sjsr_RuntimeLong__Z = (function(b) {
  var ahi = this.hi$2;
  var bhi = b.hi$2;
  return ((ahi === bhi) ? (((-2147483648) ^ this.lo$2) >= ((-2147483648) ^ b.lo$2)) : (ahi > bhi))
});
$c_sjsr_RuntimeLong.prototype.unary$und$tilde__sjsr_RuntimeLong = (function() {
  return new $c_sjsr_RuntimeLong((~this.lo$2), (~this.hi$2))
});
$c_sjsr_RuntimeLong.prototype.$$bar__sjsr_RuntimeLong__sjsr_RuntimeLong = (function(b) {
  return new $c_sjsr_RuntimeLong((this.lo$2 | b.lo$2), (this.hi$2 | b.hi$2))
});
$c_sjsr_RuntimeLong.prototype.$$amp__sjsr_RuntimeLong__sjsr_RuntimeLong = (function(b) {
  return new $c_sjsr_RuntimeLong((this.lo$2 & b.lo$2), (this.hi$2 & b.hi$2))
});
$c_sjsr_RuntimeLong.prototype.$$up__sjsr_RuntimeLong__sjsr_RuntimeLong = (function(b) {
  return new $c_sjsr_RuntimeLong((this.lo$2 ^ b.lo$2), (this.hi$2 ^ b.hi$2))
});
$c_sjsr_RuntimeLong.prototype.$$less$less__I__sjsr_RuntimeLong = (function(n) {
  return new $c_sjsr_RuntimeLong((((32 & n) === 0) ? (this.lo$2 << n) : 0), (((32 & n) === 0) ? (((((this.lo$2 >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (this.hi$2 << n)) : (this.lo$2 << n)))
});
$c_sjsr_RuntimeLong.prototype.$$greater$greater$greater__I__sjsr_RuntimeLong = (function(n) {
  return new $c_sjsr_RuntimeLong((((32 & n) === 0) ? (((this.lo$2 >>> n) | 0) | ((this.hi$2 << 1) << ((31 - n) | 0))) : ((this.hi$2 >>> n) | 0)), (((32 & n) === 0) ? ((this.hi$2 >>> n) | 0) : 0))
});
$c_sjsr_RuntimeLong.prototype.$$greater$greater__I__sjsr_RuntimeLong = (function(n) {
  return new $c_sjsr_RuntimeLong((((32 & n) === 0) ? (((this.lo$2 >>> n) | 0) | ((this.hi$2 << 1) << ((31 - n) | 0))) : (this.hi$2 >> n)), (((32 & n) === 0) ? (this.hi$2 >> n) : (this.hi$2 >> 31)))
});
$c_sjsr_RuntimeLong.prototype.unary$und$minus__sjsr_RuntimeLong = (function() {
  var lo = this.lo$2;
  var hi = this.hi$2;
  return new $c_sjsr_RuntimeLong(((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)))
});
$c_sjsr_RuntimeLong.prototype.$$plus__sjsr_RuntimeLong__sjsr_RuntimeLong = (function(b) {
  var alo = this.lo$2;
  var ahi = this.hi$2;
  var bhi = b.hi$2;
  var lo = ((alo + b.lo$2) | 0);
  return new $c_sjsr_RuntimeLong(lo, ((((-2147483648) ^ lo) < ((-2147483648) ^ alo)) ? ((1 + ((ahi + bhi) | 0)) | 0) : ((ahi + bhi) | 0)))
});
$c_sjsr_RuntimeLong.prototype.$$minus__sjsr_RuntimeLong__sjsr_RuntimeLong = (function(b) {
  var alo = this.lo$2;
  var ahi = this.hi$2;
  var bhi = b.hi$2;
  var lo = ((alo - b.lo$2) | 0);
  return new $c_sjsr_RuntimeLong(lo, ((((-2147483648) ^ lo) > ((-2147483648) ^ alo)) ? (((-1) + ((ahi - bhi) | 0)) | 0) : ((ahi - bhi) | 0)))
});
$c_sjsr_RuntimeLong.prototype.$$times__sjsr_RuntimeLong__sjsr_RuntimeLong = (function(b) {
  var alo = this.lo$2;
  var blo = b.lo$2;
  var a0 = (65535 & alo);
  var a1 = ((alo >>> 16) | 0);
  var b0 = (65535 & blo);
  var b1 = ((blo >>> 16) | 0);
  var a0b0 = $imul(a0, b0);
  var a1b0 = $imul(a1, b0);
  var a0b1 = $imul(a0, b1);
  var lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
  var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
  var hi = (((((((($imul(alo, b.hi$2) + $imul(this.hi$2, blo)) | 0) + $imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
  return new $c_sjsr_RuntimeLong(lo, hi)
});
$c_sjsr_RuntimeLong.prototype.$$div__sjsr_RuntimeLong__sjsr_RuntimeLong = (function(b) {
  var this$1 = $m_sjsr_RuntimeLong$();
  var lo = this$1.divideImpl__I__I__I__I__I(this.lo$2, this.hi$2, b.lo$2, b.hi$2);
  return new $c_sjsr_RuntimeLong(lo, this$1.scala$scalajs$runtime$RuntimeLong$$hiReturn$f)
});
$c_sjsr_RuntimeLong.prototype.$$percent__sjsr_RuntimeLong__sjsr_RuntimeLong = (function(b) {
  var this$1 = $m_sjsr_RuntimeLong$();
  var lo = this$1.remainderImpl__I__I__I__I__I(this.lo$2, this.hi$2, b.lo$2, b.hi$2);
  return new $c_sjsr_RuntimeLong(lo, this$1.scala$scalajs$runtime$RuntimeLong$$hiReturn$f)
});
$c_sjsr_RuntimeLong.prototype.compareTo__O__I = (function(x$1) {
  var that = $as_sjsr_RuntimeLong(x$1);
  return $m_sjsr_RuntimeLong$().scala$scalajs$runtime$RuntimeLong$$compare__I__I__I__I__I(this.lo$2, this.hi$2, that.lo$2, that.hi$2)
});
function $is_sjsr_RuntimeLong(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sjsr_RuntimeLong)))
}
function $as_sjsr_RuntimeLong(obj) {
  return (($is_sjsr_RuntimeLong(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.runtime.RuntimeLong"))
}
function $isArrayOf_sjsr_RuntimeLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjsr_RuntimeLong)))
}
function $asArrayOf_sjsr_RuntimeLong(obj, depth) {
  return (($isArrayOf_sjsr_RuntimeLong(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.runtime.RuntimeLong;", depth))
}
var $d_sjsr_RuntimeLong = new $TypeData().initClass({
  sjsr_RuntimeLong: 0
}, false, "scala.scalajs.runtime.RuntimeLong", {
  sjsr_RuntimeLong: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
});
$c_sjsr_RuntimeLong.prototype.$classData = $d_sjsr_RuntimeLong;
function $ct_jl_ArithmeticException__init___T($thiz, s) {
  $ct_jl_Throwable__init___T__jl_Throwable__Z__Z($thiz, s, null, true, true);
  return $thiz
}
/** @constructor */
function $c_jl_ArithmeticException() {
  this.s$1 = null;
  this.e$1 = null;
  this.enableSuppression$1 = false;
  this.writableStackTrace$1 = false;
  this.stackTraceStateInternal$1 = null;
  this.stackTrace$1 = null;
  this.suppressed$1 = null
}
$c_jl_ArithmeticException.prototype = new $h_jl_RuntimeException();
$c_jl_ArithmeticException.prototype.constructor = $c_jl_ArithmeticException;
/** @constructor */
function $h_jl_ArithmeticException() {
  /*<skip>*/
}
$h_jl_ArithmeticException.prototype = $c_jl_ArithmeticException.prototype;
var $d_jl_ArithmeticException = new $TypeData().initClass({
  jl_ArithmeticException: 0
}, false, "java.lang.ArithmeticException", {
  jl_ArithmeticException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ArithmeticException.prototype.$classData = $d_jl_ArithmeticException;
function $ct_jl_ClassCastException__init___T($thiz, s) {
  $ct_jl_Throwable__init___T__jl_Throwable__Z__Z($thiz, s, null, true, true);
  return $thiz
}
/** @constructor */
function $c_jl_ClassCastException() {
  this.s$1 = null;
  this.e$1 = null;
  this.enableSuppression$1 = false;
  this.writableStackTrace$1 = false;
  this.stackTraceStateInternal$1 = null;
  this.stackTrace$1 = null;
  this.suppressed$1 = null
}
$c_jl_ClassCastException.prototype = new $h_jl_RuntimeException();
$c_jl_ClassCastException.prototype.constructor = $c_jl_ClassCastException;
/** @constructor */
function $h_jl_ClassCastException() {
  /*<skip>*/
}
$h_jl_ClassCastException.prototype = $c_jl_ClassCastException.prototype;
var $d_jl_ClassCastException = new $TypeData().initClass({
  jl_ClassCastException: 0
}, false, "java.lang.ClassCastException", {
  jl_ClassCastException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ClassCastException.prototype.$classData = $d_jl_ClassCastException;
function $ct_jl_IndexOutOfBoundsException__init___T($thiz, s) {
  $ct_jl_Throwable__init___T__jl_Throwable__Z__Z($thiz, s, null, true, true);
  return $thiz
}
/** @constructor */
function $c_jl_IndexOutOfBoundsException() {
  this.s$1 = null;
  this.e$1 = null;
  this.enableSuppression$1 = false;
  this.writableStackTrace$1 = false;
  this.stackTraceStateInternal$1 = null;
  this.stackTrace$1 = null;
  this.suppressed$1 = null
}
$c_jl_IndexOutOfBoundsException.prototype = new $h_jl_RuntimeException();
$c_jl_IndexOutOfBoundsException.prototype.constructor = $c_jl_IndexOutOfBoundsException;
/** @constructor */
function $h_jl_IndexOutOfBoundsException() {
  /*<skip>*/
}
$h_jl_IndexOutOfBoundsException.prototype = $c_jl_IndexOutOfBoundsException.prototype;
var $d_jl_IndexOutOfBoundsException = new $TypeData().initClass({
  jl_IndexOutOfBoundsException: 0
}, false, "java.lang.IndexOutOfBoundsException", {
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_IndexOutOfBoundsException.prototype.$classData = $d_jl_IndexOutOfBoundsException;
function $ct_sjsr_UndefinedBehaviorError__init___jl_Throwable($thiz, cause) {
  var message = ((cause === null) ? null : cause.toString__T());
  $ct_jl_Throwable__init___T__jl_Throwable__Z__Z($thiz, message, cause, true, true);
  return $thiz
}
/** @constructor */
function $c_sjsr_UndefinedBehaviorError() {
  this.s$1 = null;
  this.e$1 = null;
  this.enableSuppression$1 = false;
  this.writableStackTrace$1 = false;
  this.stackTraceStateInternal$1 = null;
  this.stackTrace$1 = null;
  this.suppressed$1 = null
}
$c_sjsr_UndefinedBehaviorError.prototype = new $h_jl_VirtualMachineError();
$c_sjsr_UndefinedBehaviorError.prototype.constructor = $c_sjsr_UndefinedBehaviorError;
/** @constructor */
function $h_sjsr_UndefinedBehaviorError() {
  /*<skip>*/
}
$h_sjsr_UndefinedBehaviorError.prototype = $c_sjsr_UndefinedBehaviorError.prototype;
var $d_sjsr_UndefinedBehaviorError = new $TypeData().initClass({
  sjsr_UndefinedBehaviorError: 0
}, false, "scala.scalajs.runtime.UndefinedBehaviorError", {
  sjsr_UndefinedBehaviorError: 1,
  jl_VirtualMachineError: 1,
  jl_Error: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_sjsr_UndefinedBehaviorError.prototype.$classData = $d_sjsr_UndefinedBehaviorError;
function $ct_jl_ArrayIndexOutOfBoundsException__init___T($thiz, s) {
  $ct_jl_Throwable__init___T__jl_Throwable__Z__Z($thiz, s, null, true, true);
  return $thiz
}
/** @constructor */
function $c_jl_ArrayIndexOutOfBoundsException() {
  this.s$1 = null;
  this.e$1 = null;
  this.enableSuppression$1 = false;
  this.writableStackTrace$1 = false;
  this.stackTraceStateInternal$1 = null;
  this.stackTrace$1 = null;
  this.suppressed$1 = null
}
$c_jl_ArrayIndexOutOfBoundsException.prototype = new $h_jl_IndexOutOfBoundsException();
$c_jl_ArrayIndexOutOfBoundsException.prototype.constructor = $c_jl_ArrayIndexOutOfBoundsException;
/** @constructor */
function $h_jl_ArrayIndexOutOfBoundsException() {
  /*<skip>*/
}
$h_jl_ArrayIndexOutOfBoundsException.prototype = $c_jl_ArrayIndexOutOfBoundsException.prototype;
var $d_jl_ArrayIndexOutOfBoundsException = new $TypeData().initClass({
  jl_ArrayIndexOutOfBoundsException: 0
}, false, "java.lang.ArrayIndexOutOfBoundsException", {
  jl_ArrayIndexOutOfBoundsException: 1,
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ArrayIndexOutOfBoundsException.prototype.$classData = $d_jl_ArrayIndexOutOfBoundsException;
/** @constructor */
function $c_sjs_js_JavaScriptException(exception) {
  this.s$1 = null;
  this.e$1 = null;
  this.enableSuppression$1 = false;
  this.writableStackTrace$1 = false;
  this.stackTraceStateInternal$1 = null;
  this.stackTrace$1 = null;
  this.suppressed$1 = null;
  this.exception$4 = null;
  this.exception$4 = exception;
  $ct_jl_Throwable__init___T__jl_Throwable__Z__Z(this, null, null, true, true)
}
$c_sjs_js_JavaScriptException.prototype = new $h_jl_RuntimeException();
$c_sjs_js_JavaScriptException.prototype.constructor = $c_sjs_js_JavaScriptException;
/** @constructor */
function $h_sjs_js_JavaScriptException() {
  /*<skip>*/
}
$h_sjs_js_JavaScriptException.prototype = $c_sjs_js_JavaScriptException.prototype;
$c_sjs_js_JavaScriptException.prototype.getMessage__T = (function() {
  return $dp_toString__T(this.exception$4)
});
$c_sjs_js_JavaScriptException.prototype.fillInStackTrace__jl_Throwable = (function() {
  this.setStackTraceStateInternal__O__(this.exception$4);
  return this
});
$c_sjs_js_JavaScriptException.prototype.productPrefix__T = (function() {
  return "JavaScriptException"
});
$c_sjs_js_JavaScriptException.prototype.productArity__I = (function() {
  return 1
});
$c_sjs_js_JavaScriptException.prototype.productElement__I__O = (function(x$1) {
  if ((x$1 === 0)) {
    return this.exception$4
  } else {
    throw $ct_jl_IndexOutOfBoundsException__init___T(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
  }
});
$c_sjs_js_JavaScriptException.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__I(this, (-889275714))
});
$c_sjs_js_JavaScriptException.prototype.setStackTraceStateInternal__O__ = (function(e) {
  this.stackTraceStateInternal$1 = e
});
function $is_sjs_js_JavaScriptException(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sjs_js_JavaScriptException)))
}
function $as_sjs_js_JavaScriptException(obj) {
  return (($is_sjs_js_JavaScriptException(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.js.JavaScriptException"))
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjs_js_JavaScriptException)))
}
function $asArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (($isArrayOf_sjs_js_JavaScriptException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.js.JavaScriptException;", depth))
}
var $d_sjs_js_JavaScriptException = new $TypeData().initClass({
  sjs_js_JavaScriptException: 0
}, false, "scala.scalajs.js.JavaScriptException", {
  sjs_js_JavaScriptException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1
});
$c_sjs_js_JavaScriptException.prototype.$classData = $d_sjs_js_JavaScriptException;
$L0 = new $c_sjsr_RuntimeLong(0, 0);
$m_Lcom_yueyi_Game$().main__AT__V($makeNativeArrayWrapper($d_T.getArrayOf(), []));
}).call(this);
//# sourceMappingURL=client-fastopt.js.map
