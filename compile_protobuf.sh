#!/usr/bin/env bash

#https://juejin.cn/post/7345757062109265972

echo "所在目录 : $PWD"
protoFolder=protobuf
outFolder=generated/protobuf
rm -rf $outFolder
mkdir -p $outFolder

files=$(find $protoFolder -iname  "*.proto")
for file in $files;do
  file=${file#"$protoFolder"/}
  file=${file%%.*}
#  echo "取得文件 : $file"
  pbjs -t static-module -w es6 -o "$outFolder"/"$file".js "$protoFolder"/"$file".proto
  pbts -o "$outFolder"/"$file".d.ts "$outFolder"/"$file".js
done
