// Import stylesheets
import './style.css';

import { Utilities } from './Utilities';
import { PromisePlayground } from './Promises';

const log = Utilities.HtmlAddItem;

// Write TypeScript code!
log('hello');

PromisePlayground();

// var arg = "Require cycle: node_modules/react-native-firebase/dist/modules/firestore/CollectionReference.js -> no";
// var regex = /Require cycle: node_modules(\\|\/)(jsan(\\|\/)|rn-fetch-blob(\\|\/)|react-native-firebase(\\|\/))/;
// log(regex.test(arg));

// var test = {color: 'red'}
// log(test ? test : 'no color')
// log(test || 'no color')
// var zero = 0;
// log(zero || zero)
// log(0 || true)
// log(undefined || 0)

// var test: boolean;
// log(test === undefined ? false : true)
// log(test ? true : false)
// const Initial = {one: 'test', two: 'test2'}
// log({...Initial, one: undefined})
// const latinBasic =
//   ' !"#$%&' +
//   "'" +
//   '()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
//   '[]^_`abcdefghijklmnopqrstuvwxyz{|}~';
// const latinSupplement =
//   ' ¡¢£¥¦§©«®°²³·¶¹' + "'" + '»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÑÒÓÔÕÖØÙÚÛÜßàáâãäåæçèéêëìíîïñòóôõöøùúûüÿ';
// const latinExtendedA = 'ĀāĆćČčĒēĖėĘęĪīĮįŁłŃńŌōŒœŚśŠšŪūŸŹźŻżŽž';
// const latinOther = 'ΠΩμπẞ–—‘’‚“”„†‡•…⁴ⁿ₩€₽‰′″‹›‽₱℅№™⅓⅔⅛⅜⅝⅞←↑→↓∅∆√∞≈≠★♠♣♥♦♪✓';
// const mobileCharSet = latinBasic + latinSupplement + latinExtendedA + latinOther;
// log(latinOther.substring(0,7) + "''" + latinOther.substring(9,10) + '""' + latinOther.substring(12));
// log(mobileCharSet[216]);
// const text = '‘single’“double”';
// log(text);
// const re2 = new RegExp('([\u2018\u2019])|([\u201C\u201D])', '\g');
// const f2 = (match: string, single: string, double: string) => {
//   log(`${match} - ${single} - ${double}`);
//   return single ? "'" : double ? '\u20ac' : ''
// }
// log(text.replace(re2,f2));

// const text = 'AAAA &#x1f92a; &#x1f347; &#xa5; a h'
// const re = new RegExp('&#x(.*?);','\g');
// const f = (str: string, one: string) => {
//   const char = String.fromCodePoint(parseInt(one, 16));
//   log(char);
//   return char;
// }
// log(text.replace(re,f))

// const text2 = '~ ¢ ₽ ₩ § Abcd';
// log(text2);
// const re2 = new RegExp('[^/\x00-\x7F]', '\g');
// const f2 = (str: string) => {
//   const code = str.codePointAt(0);
//   log(str);
//   return `&#x${code.toString(16)};`;
// }
// const test = text2.replace(re2,f2);
// log(test);
// log(test.replace(re,f))

// const euro = '€';
// const regex = /euro/g;
// const re = new RegExp(euro, 'g');
// log('€ € € €'.replace(re, 'test'))

// log(String.fromCharCode(0x00A3))

// const findArray = ["’","“","”"];
// const replaceArray = ["\'","\"","\""];

// const testtext = "Don’t use “quotes”";
// const charCode = testtext.charCodeAt(3);
// log(`The character code ${charCode} is equal to ${String.fromCharCode(charCode)}`);
// filterSpecialCharacters(testtext);

// const stext = "’'“”";
// const index = 1;
// log(`The character code ${stext.charCodeAt(index)} is equal to ${stext.charAt(index)}`);
// log(String.fromCharCode(39))
// log(testtext.includes("’"))
// log(testtext.includes("’"))

// function filterSpecialCharacters(text: string): string {
//   let newString = text;
//   for (let i = 0; i < findArray.length; i++) {
//     log(`${findArray[i]} - ${replaceArray[i]}`)
//     newString = newString.replace(findArray[i], replaceArray[i]);
//   }
//   log(text);
//   log(newString)
// }

// type ApiCoverage = {coveredUser?: string, coveredWorkgroup?: string};
// type Coverage = {
//   userUri?: string,
//   workgroupUri?: string,
// }
// const apiCoverage: ApiCoverage = {
//   coveredUser: "userURI",
//   // coveredWorkgroup: "workgroupURI"
// };
// // const apiCoverage: ApiCoverage = undefined;
// const coverage: Coverage = apiCoverage ? {} : undefined;
// if (coverage) {
//   if (apiCoverage && apiCoverage.coveredUser) coverage.userUri = apiCoverage.coveredUser;
//   if (apiCoverage && apiCoverage.coveredWorkgroup)
//     coverage.workgroupUri = apiCoverage.coveredWorkgroup;
// }
// log(coverage);

// const newCoverage: Coverage = apiCoverage ?
// { userUri: apiCoverage.coveredUser, workgroupUri: apiCoverage.coveredWorkgroup } :
// undefined;
// log(newCoverage);

// log(apiCoverage && newCoverage)

// const usersMap: Map<string, { status: string, time: string }> = new Map();
// usersMap.set("one", {status: 'open', time: 'now'});
// log(usersMap);

// const test = {
//   paul: {status: 'one', time: 'two'},
//   steve: {status: 'three', time: 'four'}
// }
// log(Object.keys(test).forEach(key => {
//   log(test[key]);
// }));
// log(100 - 6 * 2)
// const style = { width: undefined };
// log(style.width ? 1 : 2)
// log(style.height ? 1 : 3)

// log(true || false && true)
