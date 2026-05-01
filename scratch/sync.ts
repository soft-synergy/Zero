import { writeTranslationSources, getAllSerializedTranslations } from '../lib/admin/translation-source';

writeTranslationSources(getAllSerializedTranslations());
console.log('Done!');
