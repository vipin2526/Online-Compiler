// const compile = (lang, code,input='') => ({
//     method: 'POST',
//     url: 'https://codejudge.geeksforgeeks.org/submit-request',
//     headers: {
//         'content-type': 'application/json',
//     },
//     data : {
//         'language': lang,
//         'code': code,
//         'input': input,
//         'save': false,
//     }
// });

/// below code is rapid api compiler (100req/month) so i am not using

// const anoopvipin58key='b3720ed360msh5dd3eae15e96347p1a7b22jsn634059971dda';
const xmartcoderkey = '5669536d01mshd207741f34f3f88p17e326jsnecbf231bf2f8';

const compile = (lang, code) => ({
    method: 'POST',
    url: 'https://online-code-compiler.p.rapidapi.com/v1/',
    headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': xmartcoderkey,
        'X-RapidAPI-Host': 'online-code-compiler.p.rapidapi.com'
    },
    data: {
        language: lang,
        version: 'latest',
        code: code,
        input: null
    }
});

// const allLang = () => ({
//     method: 'GET',
//     url: 'https://online-code-compiler.p.rapidapi.com/v1/languages/',
//     headers: {
//         'X-RapidAPI-Key': 'b3720ed360msh5dd3eae15e96347p1a7b22jsn634059971dda',
//         'X-RapidAPI-Host': 'online-code-compiler.p.rapidapi.com'
//     }
// });




export { compile };