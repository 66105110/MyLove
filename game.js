$(document).keydown(function(event){
	switch(event.keyCode)
	{
		case 37:
		if(moveLeft())
		{
			setTimeout("generateOneNumber()",210);
			setTimeout("isgameover()",300);
		}
		break;//左
		case 38:
		if(moveUp())
		{
			setTimeout("generateOneNumber()",210);
			setTimeout("isgameover()",300);
		}
		break;//上
		case 39:
		if(moveRight())
		{
			setTimeout("generateOneNumber()",210);
			setTimeout("isgameover()",300);
		}
		break;//右
		case 40:
		if(moveDown())
		{
			setTimeout("generateOneNumber()",210);
			setTimeout("isgameover()",300);
		}
		break;//下
		default:break;
	}
	})
	
function moveLeft()
{
	if(!canMoveLeft(board))
	{
		return false;
	}
	for(var i=0;i<4;i++)
	for(var j=1;j<4;j++)
	{
		if(board[i][j]!=0)
		{
			for(var k=0;k<j;k++)
			{
				if(board[i][k]==0&&noBlokHorizontalCol(i,k,j,board))
				{
					showMoveAnimation(i,j,i,k);
					board[i][k]=board[i][j];
					board[i][j]=0;
				}
				else if(board[i][k]==board[i][j]&&noBlokHorizontalCol(i,k,j,board)&&!hasConflicted[i][k])
				{
					showMoveAnimation(i,j,i,k);
					board[i][k]+=board[i][j];
					board[i][j]=0;
					score+=board[i][k];
					updateScore(score);
					hasConflicted[i][k]=true;
				}
			}
		}
	}
	setTimeout("updateBoardView()",200);
	return true;
}

function moveUp()
{
	if(!canMoveUp(board))
	{
		return false;
	}
	for(var i=1;i<4;i++)
	for(var j=0;j<4;j++)
	{
		if(board[i][j]!=0)
		{
			for(var k=0;k<i;k++)
			{
				if(board[k][j]==0&&noBlokHorizontalCol(k,i,j,board))
				{
					showMoveAnimation(i,j,k,j);
					board[k][j]=board[i][j];
					board[i][j]=0;
				}
				else if(board[k][j]==board[i][j]&&noBlokHorizontalCol(k,i,j,board)&&!hasConflicted[i][k])
				{
					showMoveAnimation(i,j,k,j);
					board[k][j]+=board[i][j];
					board[i][j]=0;
					score+=board[k][j];
					updateScore(score);
					hasConflicted[i][k]=true;
				}
			}
		}
	}
	setTimeout("updateBoardView()",200);
	return true;
}

function moveRight()
{
	if(!canMoveRight(board))
	{
		return false;
	}
	for(var i=0;i<4;i++)
	for(var j=2;j>=0;j--)
	{
		if(board[i][j]!=0)
		{
			for(var k=3;k>j;k--)
			{
				if(board[i][k]==0&&noBlokHorizontalCol(i,k,j,board))
				{
					showMoveAnimation(i,j,i,k);
					board[i][k]=board[i][j];
					board[i][j]=0;
				}
				else if(board[i][k]==board[i][j]&&noBlokHorizontalCol(i,k,j,board)&&!hasConflicted[i][k])
				{
					showMoveAnimation(i,j,i,k);
					board[i][k]+=board[i][j];
					board[i][j]=0;
					score+=board[i][k];
					updateScore(score);
					hasConflicted[i][k]=true;
				}
			}
		}
	}
	setTimeout("updateBoardView()",200);
	return true;
}

function moveDown()
{
	if(!canMoveDown(board))
	{
		return false;
	}
	for(var i=2;i>=0;i--)
	for(var j=0;j<4;j++)
	{
		if(board[i][j]!=0)
		{
			for(var k=3;k>i;k--)
			{
				if(board[k][j]==0&&noBlokHorizontalCol(i,k,j,board))
				{
					showMoveAnimation(i,j,k,j);
					board[k][j]=board[i][j];
					board[i][j]=0;
				}
				else if(board[k][j]==board[i][j]&&noBlokHorizontalCol(i,k,j,board)&&!hasConflicted[i][k])
				{
					showMoveAnimation(i,j,k,j);
					board[k][j]+=board[i][j];
					board[i][j]=0;
					score+=board[k][j];
					updateScore(score);
					hasConflicted[i][k]=true;
				}
			}
		}
	}
	setTimeout("updateBoardView()",200);
	return true;
}

function isgameover()
{
	if(nospace(board)&&nomove(board))
	{
		gameover();
	}
}

function gameover()
{
	$("#grid-container").append("<div id='gameover' class='gameover'><p>本次得分</p><span>"+score+"</span><a href='javascript:restartgame();' id='restartgamebutton'>Restart</a></div>");
	var gameover=$("#gameover");
	gameover.css("width","460px");
	gameover.css("height","460px");
	gameover.css("background-color","rgba(0,0,0,0.5)");
}