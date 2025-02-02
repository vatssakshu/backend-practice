import {serve} from 'bun'

serve({
    fetch(request){
        const url = new URL(request.url);
        if (url.pathname === '/') {
            return new Response('Hello Ice Cream', {status: 200});
        }
        else if (url.pathname === '/ice-cream') {
            return new Response('Thankyou for ordering Ice Cream from bun', {status: 200});
        }
        else{
            return new Response('Not Found', {status: 404});
        }
    },
    port: 3000,
    hostname: '127.0.0.1'
})