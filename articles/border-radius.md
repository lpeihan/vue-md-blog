{
  "title": "border-radius隐藏的威力",
  "date": "2017-12-22",
  "tags": "css"
}

1. 实心圆

   ```css
   #circle {
     width: 100px;
     height: 100px;
     background: red;
     border-radius: 50%;
   }
   ```

2. 空心圆

   ```css
   #circle {
     width: 100px;
     height: 100px;
     border: 1px solid red;
     border-radius: 50%;
   }
   ```
<!-- lph -->
3.  虚线圆

   ```css
   #circle {
     width: 100px;
     height: 100px;
     border: 1px dashed red;
     border-radius: 50%;
   }
   ```

4. 半圆

   * 向下半圆

     ```css
     #circle {
       width: 200px;
       height: 100px;
       border: 1px solid red;
       border-radius: 0 0 100px 100px;
     }
     /* 如果要让上边镂空，则加 border-top: none */
     ```

   * 向上半圆

     ```css
     #circle {
       width: 200px;
       height: 100px;
       border: 1px solid red;
       border-radius: 100px 100px 0 0;
     }
     ```

   * 向左半圆

     ```css
     #circle {
       width: 100px;
       height: 200px;
       border: 1px solid red;
       border-radius: 100px 0 0 100px;
     }
     ```

   * 向右半圆

     ```css
     #circle {
       width: 100px;
       height: 200px;
       border: 1px solid red;
       border-radius: 0 100px 100px 0;
     }
     ```

5. 四分之一圆

   ```css
   #circle {
     width: 100px;
     height: 100px;
     border: 1px solid red;
     border-radius: 100px 0 0 0;
   }
   ```

6. 长方形两边半圆

   ```css
   #circle {
     width: 200px;
     height: 100px;
     border: 1px solid red;
     border-radius: 50px;
   }
   ```

   ​