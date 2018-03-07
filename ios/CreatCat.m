//
//  CreatCat.m
//  TestProject
//
//  Created by zzy on 2018/3/5.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "CreatCat.h"
#import <React/RCTEventDispatcher.h>
@implementation CreatCat


RCT_EXPORT_MODULE();

//一个参数
RCT_EXPORT_METHOD(calliOSActionWithOneParams:(NSString *)name)
{
}

RCT_EXPORT_METHOD( cratCat:(NSString *)name sex:(NSString *)sex age:(int)age)
{
  NSLog(@"我创建了一只名叫%@的猫，性别%@， 今年%d岁", name, sex, age);
}

//对外提供调用方法
RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location){
  NSLog(@"Pretending to create an event %@ at %@", name, location);
}

//方法3
RCT_EXPORT_METHOD(whoName:(NSString *)name age:(int)age location:(NSString *)location){
  NSLog(@"可以的%@,年来%d,还有%@",name,age,location);
}

//回调
//RCTResponseSenderBlock
//RCTResponseSenderBlock只接受一个参数,为数组，把需要回调的参数加入到数组中，回调回去
RCT_EXPORT_METHOD(calliOSActionWithCallBack:(RCTResponseSenderBlock)callBlock){
  NSString *string=@"hello";
  
  NSArray *array=@[@"RN",@"and",@"iOS"];
  
  NSString *end=@"goodbay";
  
  //更多参数放到数组中进行回调
  callBlock(@[string,array,end]);
}



@end
