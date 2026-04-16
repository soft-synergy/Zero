
const { getRuntimeTranslations } = require('./lib/admin/translation-source');
try {
  const trans = getRuntimeTranslations('en');
  console.log('Success, keys:', Object.keys(trans).length);
} catch (e) {
  console.error('Error:', e);
}
