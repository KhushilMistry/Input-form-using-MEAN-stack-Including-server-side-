var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var UserSchema=new Schema({
	name:{
		type:String,
		required:true
	},
	email:{
		type:String,
		unique:true,
		required:true,
		index:true
	},
	education:{
		type:String,
		required:true
	},
	adress:
	{
		wing:{
			type:String,
			required:true
		},
		room:{
			type:String,
			required:true
		},
		HOR:{
			type:String,
			required:true
		}

	},
	college:{
		type:String,
		default:'DA-IICT'
	},
	skills:{
		intrestAreas:{
			type:[String],
			required:true
		},
		programmingLang:{
			type:[String],
			required:true
		},
		ToolsandTech:{
			type:[String],
			required:true
		},
		Electives:{
			type:[String],
		}
	},

	internship:{
		Experienxe:{
			type:String
		},
		Rural:{
			name:{
				type:String,
				required:true
			},
			guideName:{
				type:String,
				required:true
			},
			description:{
				required:true,
				type:String,
				maxlength:50
			},
			teamSize:{
				type:Number,
				required:true
			}
		}
	},
	projects:{
		type:String,
		required:true
	},

	positionOfRes:{
		type:String,
		required:true
	},

	awardsAndAchive:{
		type:[String],
		required:true
	},

	intrestsAndHobby:{
		type:[String],
		required:true
	}


});

module.exports=mongoose.model('Place',UserSchema);