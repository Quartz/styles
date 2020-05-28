const StyleDictionary = require('style-dictionary');

StyleDictionary.registerTransform({
  name: 'font/swift/lineHeightToCGFLoat',
  type: 'value',
  matcher: function(prop) {
		return (prop.attributes.category === 'font' && prop.attributes.type === 'line-height')
  },
  transformer: function(prop) {
    const val = Number.parseFloat(prop.original.value);
    return `CGFloat(${(val.toFixed(2))})`;
  }
});

StyleDictionaryExtended = StyleDictionary.extend(__dirname + '/config.json');

StyleDictionaryExtended.buildAllPlatforms();
