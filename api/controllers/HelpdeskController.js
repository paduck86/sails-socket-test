var tasks = [
    {
        id: 1,
        name: 'Help Desk Request #1',
        isCompleted: false
    },
    {
        id: 2,
        name: 'Help Desk Request #2',
        isCompleted: false
    },
    {
        id: 3,
        name: 'Help Desk Request #3',
        isCompleted: false
    },
    {
        id: 4,
        name: 'Help Desk Request #4',
        isCompleted: false
    },
    {
        id: 5,
        name: 'Help Desk Request #5',
        isCompleted: false
    },
    {
        id: 6,
        name: 'Help Desk Request #6',
        isCompleted: false
    },
    {
        id: 7,
        name: 'Help Desk Request #7',
        isCompleted: false
    },
    {
        id: 8,
        name: 'Help Desk Request #8',
        isCompleted: false
    },
    {
        id: 9,
        name: 'Help Desk Request #9',
        isCompleted: false
    },
    {
        id: 10,
        name: 'Help Desk Request #10',
        isCompleted: false
    }
];

module.exports = {
    getHelpdesk : _getHelpdesk,
    putHelpdesk : _putHelpdesk
};

function _getHelpdesk(req, res) {
    sails.sockets.join(req, 'helpdesk', function(err) {
        if(err) {
            return res.json(err);
        }
    });
    return res.json(tasks);

}
function _putHelpdesk(req, res) {
    var params = req.params.all(),
        completedList = params.completedList;

    console.log(completedList);

    if (completedList) {
        var list = completedList.split(',');
        //console.log(list[0]);
        /*Helpdesk.create({
            list[0],
            'Helpdesk Request #'+list[0],
            true
        })*/
        //Helpdesk.message(list[0], {isCompleted: true});

        sails.sockets.broadcast('helpdesk', {id: list[0]});
        console.log('message sent!!');
        //return res.ok();
    }

    return res.json({"success":true});
}
