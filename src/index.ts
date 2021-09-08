import server from './infrastructure/config/bootstrap/server';

export default server.listen(server.get('port'), () => {
    console.log(
        `  Products Enrichment API is running at http://localhost:${server.get('port')} in ${server.get('env')} mode',
            Press CTRL-C to stop\n`
    );
});
