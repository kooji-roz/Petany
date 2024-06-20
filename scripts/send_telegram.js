const TOKEN = '7098076195:AAF_W-Tjsl02xnNJwt3u-9n2ZgwtK-v6WtM';
const CHATID = '-1002024464091';
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

let validation = new JustValidate('form')

validation.addField('#name', [
    {
        rule: 'required',
        errorMessage: 'Введите имя'
    },
]).addField("#email", [
    {
        rule: 'required',
        errorMessage: 'Введите email'
    },
]).addField('#tel', [
    {
        rule: 'required',
        errorMessage: 'Введите телефон'
    }
]).addField('#message', [
    {
        rule: 'required',
        errorMessage: 'Введите сообщение'
    }
])
.onSuccess(function () {
    document.getElementById('form').addEventListener('submit', function(e) {
        e.preventDefault()
    
        const name_value = document.getElementById('name').value
        const email_value = document.getElementById('email').value
        const tel_value = document.getElementById('tel').value
        const message_value = document.getElementById('message').value
    
        let message = '<b>Заявка с сайта Petany</b>\n';
        message += `<b>👤 имя: ${name_value}</b>\n`
        message += `<b>📞 телефон: ${tel_value}</b>\n`
        message += `<b>📩 почта ${email_value}</b>\n`
        message += `<b>сообщение: ${message_value}</b>\n`

        document.getElementById('name').value = ""
        document.getElementById('email').value = ""
        document.getElementById('tel').value = ""
        document.getElementById('message').value = ""
        
        axios.post(URL_API, {
            chat_id: CHATID,
            parse_mode: 'html',
            text: message
        })
        .then((res) => {
            alert("Заявка успешно отправлена")
        })
        .catch((err) => {
            console.warn(err)
        })
    })
})

