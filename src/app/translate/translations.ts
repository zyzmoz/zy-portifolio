import {OpaqueToken} from '@angular/core';

import { LANG_EN_NAME, LANG_EN_TRANS } from './lang-en';
import { LANG_PTBR_NAME, LANG_PTBR_TRANS } from './lang-ptbr';

export const TRANSLATIONS = new OpaqueToken('translations');


export const dictionary = {
    [LANG_EN_NAME]: LANG_EN_TRANS,
    [LANG_PTBR_NAME]: LANG_PTBR_TRANS
};

//provider
export const TRANSLATION_PROVIDER = [
    {provide: TRANSLATIONS, useValue: dictionary},
]