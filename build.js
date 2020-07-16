const StyleDictionary = require('style-dictionary');

StyleDictionary.registerTransform({
  name: 'font/swift/lineHeightToCGFloat',
  type: 'value',
  matcher: function(prop) {
		return (prop.attributes.category === 'font' && prop.attributes.type === 'line-height')
  },
  transformer: function(prop) {
    const val = Number.parseFloat(prop.original.value);
    return `CGFloat(${(val.toFixed(2))})`;
  }
});

StyleDictionary.registerTransform({
  name: 'time/swift/millisecondsToTimeInterval',
  type: 'value',
  matcher: function(prop) {
		return (prop.attributes.category === 'time')
  },
  transformer: function(prop) {
    const val = Number.parseFloat(prop.original.value) / 1000;
    return `TimeInterval(${val})`;
  }
});

StyleDictionaryExtended = StyleDictionary.extend(__dirname + '/config.json');

StyleDictionaryExtended.buildAllPlatforms();
