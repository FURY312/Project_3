router.get('/write', function(req,res,next){    
    res.render('write',{title : "게시판 글 쓰기"});
});