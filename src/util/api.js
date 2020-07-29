import axios from 'axios'
import cryptoJS from  'crypto-js'
import JSEncrypt from 'jsencrypt'

//声明一个公钥
const pubkey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxqeMu4x40qK1/O+ZgXhQ
LWg1QRbURaGO0T3J39agFxCnuxjPw0r6P85GCi5tVtWerZmPA6E0j1KGyZFqEGBA
sq+aKOoZF4eVurL8ilNim76++AuFD/C6+9tBMkgJOceFvmB0U746S9koXz/YxXq8
mqPrBbhZLWMMKDlGMmQwlgd5RbAV43nwkiFQMJbt2G5RbW5LFQFCmMbno3rw3UZM
7CmtGiSFvsNI1hPCHiLoCjjedNx62LR/jVsUmLosG5Fni9nRSyEPvx1ClqyzVlbr
aeeqYjZb9hR79tkEMkheuCSOXW0D25FT+2CV+y9ioYoFtiitwvHPB6EjXu73SSeW
oQIDAQAB
-----END PUBLIC KEY-----`
//AES(对称)加密
function AESEncrypt(key, plaintext) {
    var iv = key.substring(0, 16)
    var generator = cryptoJS.AES.encrypt(plaintext, cryptoJS.enc.Utf8.parse(key), {
        iv: cryptoJS.enc.Utf8.parse(iv),
        mode: cryptoJS.mode.CBC,
        padding: cryptoJS.pad.Pkcs7
    })
    //console.log(generator.toString())
    var ciphertext = generator.ciphertext.toString()
    // console.log(ciphertext)
    var rec = cryptoJS.enc.Base64.stringify(cryptoJS.enc.Utf8.parse(ciphertext))
    // return cryptoJS.enc.Base64.stringify(cryptoJS.enc.Utf8.parse(ciphertext))
    return generator.toString()
    // return cryptoJS.enc.Base64.stringify(ciphertext)

}
//AES解密
function AESDecrypt(key, ciphertext) {

    var iv = key.substring(0, 16);
    var generator = cryptoJS.AES.decrypt(ciphertext.toString(), cryptoJS.enc.Utf8.parse(key), {
        iv: cryptoJS.enc.Utf8.parse(iv),
        mode: cryptoJS.mode.CBC,
        padding: cryptoJS.pad.Pkcs7
    })
    return generator.toString(cryptoJS.enc.Utf8)
}
//RSA(非对称)加密
function RSAEncrypt(pubkey, plaintext) {
    var encrypt = new JSEncrypt()
    encrypt.setPublicKey(pubkey)
    return encrypt.encrypt(plaintext)
}
//生成随机密钥
function generate_random_key(length){
    let str = "",
    range = length,
    arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
        'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        '-', '.', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', ':', '<', '>', '?'
    ];
    for (let i = 0; i < range; i++) {
        var pos = Math.round(Math.random() * (arr.length - 1))
        str += arr[pos]
    }
    return str
}

//创建一个拥有通用配置的axios实例
const api = axios.create()
api.defaults.timeout = 5000
//使用POST请求时，表单数据提交时使用的编码类型是：'application/x-www-form-urlencoded'
api.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
api.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';
//请求拦截器
//目的:有些请求是需要用户登录之后才能访问的，或者post请求的时候，我们需要序列化我们提交的数据。
//这时候，我们可以在请求被发送之前进行一个拦截，从而进行我们想要的操作。
api.interceptors.request.use(
  config => {
    //console.log(config.data)
    // sd =  SecretData(pubkey)
    // console.log(generate_random_key(32))
    //声明params:服务器中传递的参数
    let params = config.data

    //第一步：
    //声明key:32位的随机数
    let key  = generate_random_key(32)
    //console.log(key)
    //将 JavaScript 对象转换为字符串
    params = JSON.stringify(params)
    //console.log(params)

    //第二步：
    //进行AES加密
    let AESEncryptedData = AESEncrypt(key, params)

    //console.log(AESEncryptedData)
    //第四步：
    //生成新dta
    let data = {
        key : RSAEncrypt(pubkey, key),//第三部：进行RSA加密
        value: AESEncryptedData
    }
    //第五步：
    //Base64加密
    config.data = cryptoJS.enc.Base64.stringify(cryptoJS.enc.Utf8.parse(JSON.stringify(data)))
    //CryptoJS.enc.Base64.parse 解密

    return config
  },
  error => {
    return Promise.reject(error)
  }  
)

export const Login = params => { return axios.post('/login', params) }
export const getUserList = () => { return axios.get('/user/list') }