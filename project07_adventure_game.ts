import inquirer from "inquirer";
//define the question for the player
const question = await inquirer.prompt([
    {
    type:"input",
    name:"name",
    message:"what is your name "
},{
    type:"list",
    name:"direction",
    message:"which direction do you want to go",
    choices:["north","south","east","west"]
}
])
//start the game
function startgame(){
    console.log("welcome to the adventure game!\n")
    //asks the player name 
    inquirer.prompt(question[0]).then(answers => {
        console.log(`welcome, ${answers['name']}!\n`)
        //ask for the direction to go
        inquirer.prompt(question[1]).then(answers =>{
        console.log(`you chose to go ${answers['direction']}!\n`)
         //display the results based on chosen direction
         console.log('you walk along the path...')
         switch(answers['direction']){
            case 'north':
                console.log("you encounter a dragon!");
                break;
                case 'south':
                    console.log("you found a treasure chest");
                    break;
                    case 'east':
                        console.log("you stumble upon a mysterious cave");
                        break;
                        case 'west':
                            console.log("you see a beautifull waterfall!");
                            break;
        
         }
        })
    })
}
//start the game when the script is executed
startgame()

//DONE