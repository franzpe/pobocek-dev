import en from './en.json';
import sk from './sk.json';

export type Locale = 'en' | 'sk';
export const locales: Locale[] = ['en', 'sk'];
export const defaultLocale: Locale = 'en';

const dictionaries = { en, sk } as const;

type Dict = typeof en;
type NestedKey<T, P extends string = ''> = {
  [K in keyof T]: T[K] extends string
    ? P extends ''
      ? K & string
      : `${P}.${K & string}`
    : T[K] extends object
      ? NestedKey<T[K], P extends '' ? K & string : `${P}.${K & string}`>
      : never;
}[keyof T];

export type TranslationKey = NestedKey<Dict>;

function resolve(obj: unknown, path: string): string | undefined {
  return path.split('.').reduce<unknown>((acc, key) => {
    if (acc && typeof acc === 'object' && key in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj) as string | undefined;
}

export function useT(lang: Locale) {
  const dict = dictionaries[lang] ?? dictionaries[defaultLocale];
  return (key: TranslationKey): string => {
    const val = resolve(dict, key);
    if (typeof val === 'string') return val;
    const fallback = resolve(dictionaries[defaultLocale], key);
    return typeof fallback === 'string' ? fallback : key;
  };
}

export function getLocaleFromUrl(url: URL): Locale {
  const seg = url.pathname.split('/').filter(Boolean)[0];
  if (seg === 'sk') return 'sk';
  return 'en';
}

export function localizePath(path: string, lang: Locale): string {
  const clean = path.replace(/^\/(sk)(?=\/|$)/, '') || '/';
  if (lang === 'en') return clean;
  return `/sk${clean === '/' ? '' : clean}`;
}

export function alternatePath(currentPath: string, currentLang: Locale): string {
  const other: Locale = currentLang === 'en' ? 'sk' : 'en';
  return localizePath(currentPath, other);
}
