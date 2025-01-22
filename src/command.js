
export default function execute(command){
    return new Promise((resolve)=>{
	console.log(`Executed: ${command}`);
	resolve();
    });
}
