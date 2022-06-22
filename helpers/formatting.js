//had difficulty figuring out how I wanted to format in both the db and local state for the
//comment object. I ended up deciding to keep each individual comment separate in the db
//and only have a reference to another comment if it is a reply
//When pulled from db, the comments are all in one array, this brings the comments and
//replies back together, similar to what's seen on data.json
export const formatting = (array) => {
    let response = []

    array.forEach((el) => {
        if (!el.replyingTo) {
            response.push(el)
        }

        if (el.replies.length > 0) {
            el.replies = el.replies.map((resID) => {
                let reply = array.findIndex(
                    (rComment) => rComment.comID === resID
                );
                return array[reply];
            });
        }
    });

    return response
}