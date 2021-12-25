# Flask

## 基本使用

- 输出简单Hello world

  ```python
  from flask import Flask
  
  app=Flask(__name__);
  
  @app.route('/')
  def index():
      return 'Hello World!'
  
  if __name__ == '__main__':
      app.run()
  ```

- 输出页面

  ```python
  app=Flask(__name__,template_folder='app/templates',static_url_path='/',static_folder='app/static');
  @app.route('/')
  def index():
      return render_template('index.html')
  ```

  template_folder：html位置

  static_folder：静态文件

- 在python中返回上上个目录是

  ```python
  template_folder='../../front'
  ```


- json与字典的相互转换

  ```python
  import json
  ret = json.dumps(字典名) 字典转json
  ret2 = json.loads(json数据) json转字典
  ```



## 进阶使用

- 蓝图Blueprint的2种使用

  ```python
  # __init__.py文件，导入目录下的所有文件
  from flask import Blueprint
  main = Blueprint('main', __name__)
  from . import **.py , **.py
  
  # app目录下init文件
  from flask import Flask,Blueprint
  def create_app(config_name):
      from .main import main as main_blueprint
      app.register_blueprint(main_blueprint)
      return app
  ```

  ```python
  #实体文件 views.py
  from flask import Blueprint
  蓝图名字 = Blueprint('蓝图名字',__name__)
  
  #调用文件 app.py
  from flask import Flask
  from 文件夹 import 文件名
  app.register_blueprint(文件名.蓝图名)
  ```




### 数据库的连接及增删改查

- 数据库的连接

  ```PYTHON
  from flask_sqlalchemy import SQLAlchemy
  # 设置连接数据库的URL
  app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:123456@127.0.0.1:3306/studentsystem'
  # 设置每次请求结束后会自动提交数据库中的改动
  app.config['SQLALCHEMY_COMMIT_ON_TEARDOWN'] = True
  app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
  # 查询时会显示原始SQL语句
  app.config['SQLALCHEMY_ECHO'] = True
  db = SQLAlchemy(app)
  ```

- 定义模型类

  ```python
  class User(db.Model):
      __tablename__ = 'users'
      id = db.Column(db.Integer, primary_key=True)
      name = db.Column(db.String(64), unique=True, index=True)
      email = db.Column(db.String(64), unique=True)
      password = db.Column(db.String(64))
  
      def __repr__(self):
          return 'User:%s' % self.name
  ```

- 增加数据

  ```python
  @app.route('/')
  def index():
      #增加
      Ro = Role(id=1, content='cs')
      db.session.add(Ro)
      #事务
      db.session.commit()
      return 'index'
  ```

- 更改数据

  ```python
  obj = Role.query.filter(Role.id == 1).first()
  obj.title = '2'
  db.session.commit()
  ```

- 删除数据

  ```python
  obj = Role.query.filter(Role.id == 1).first()
  db.session.delete(obj)
  db.session.commit()
  ```

- 使用模型返回数据库数据

  ```python
  @app.route('/')
  def index():
      cs = Role.query.filter(Role.id == 1).first()
      return "ID为：%s 姓名为：%s" % (cs.id, cs.name)
  ```

- ```
      methods: {
        login:function() {
                 axios.post('/todo/api/loginApi',{
                     name: this.new_login.name,
                     passwor: this.new_login.passwor
                 }).then(function (response) {
                     console.log(response.status)
                     // 其实是应该走后台路由
                     if(parseInt(response.status) === 200){
                     		alert('响应成功，跳转中')
                         	window.location.href= '/cscscs'
                     }
                 }).catch(function (error) {
                     console.log(error.response)
                 })
  			},
  				get:function() {
  					var self = this;
  					//在编译后即调用API接口取得服务器端数据
  					self.$http.get('/todo/api/getLoginApi').then(function(res) {
  						self.loginN = res.data.loginnName;
  				},function(){
  	                        console.log('请求失败处理');
  	                    });
  				}
      }
  ```

  ```python
  			var self = this;
  			self.$http.get('/todo/api/loginApi').then(function(res) {
  				self.status = res.data.status;
  				self.session = res.data.session;
  				if(self.status === 'ok'){
  					alert('登录成功，你好 ' + self.session)
            	}
  				else{
  					alert('登录失败')
  				}
  			});
  ```

  ```
        login:function() {
  				var self = this;
  				self.$http.post('/todo/api/loginApi', {
  					name: self.new_login.name,
  					passwor: self.new_login.passwor,
  				}).then(function(res) {
  					self.loginDa = res.data.loginDa;
  				alert('123')
  				}).then(function(re){
  
  				});
  			}
  ```

  ```
  				var self = this;
  				self.$http.post('/todo/api/loginApi', {
  					name: self.new_login.name,
  					passwor: self.new_login.passwor,
  				}).then(function(res) {
  					self.loginDa = res.data.loginDa;
  				}).then(function(re){
  					self.$http.get('/todo/api/loginApi', {
  						self.status = res.data.status;
  						self.session = res.data.session;
  						if(self.status === 'ok'){
  							alert('登录成功，你好 ' + self.session)
  		            	}
  					else{
  							alert('登录失败')
  					}
  					});
  				});
  ```



- 方法1：将SQLAlchemy转换为json，但是只能弄一条

  ```python
  class User(db.Model):
      def test_schema(self):
          return {
              'id': self.id,
              'name': self.name,
              'password': self.password,
              'email': self.email,
          }
  @app.route('/')
  def get():
      data = User.query.first()  # 取第一条数据
      data_serialize = data.test_schema()  # 通过我们之前在模型类里定义的序列化函数对取得数据进行序列化，此时 data_serialize 的类型是 dict
      return jsonify(data_serialize)
  ```

- 方法2：将SQLAlchemy转换为json，要重写flask.json

  ```python
  #https://blog.csdn.net/qq_44265217/article/details/103141734
  from flask import Flask,jsonify
  from flask_sqlalchemy import SQLAlchemy
  from flask.json import JSONEncoder as _JSONEncoder#重写flask.json类
  from datetime import date
  import json
  
  
  app = Flask(__name__)
  
  # 配置数据库的地址
  app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:123456@127.0.0.1:3306/studentsystem'
  
  app.config['SQLALCHEMY_COMMIT_TEARDOWN'] = True
  app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
  app.config['SQLALCHEMY_COMMIT_ON_TEARDOWN'] = True
  
  db = SQLAlchemy(app)
  
  
  class JSONEncoder(_JSONEncoder):
      def default(self, o):
          if hasattr(o, 'keys') and hasattr(o, '__getitem__'):
              return dict(o)
          if isinstance(o, date):
              return o.strftime('%Y-%m-%d %H:%M:%S')
          return json.JSONEncoder.default(self, o)
  
  
  class Flask(Flask):
      json_encoder = JSONEncoder
  
  
  class User(db.Model):
      __tablename__ = 'users'
      id = db.Column(db.Integer, primary_key=True)
      name = db.Column(db.String(64), unique=True, index=True)
      email = db.Column(db.String(64), unique=True)
      password = db.Column(db.String(64))
  
      def keys(self):
          return ['id', 'name']
  
      def __getitem__(self, item):
          return getattr(self, item)
  
  @app.route('/')
  def get():
      test_data = User.query.all()
      data_json = json.loads(json.dumps(test_data, cls=JSONEncoder))
      return jsonify(data_json)
  
  
  
  if __name__ == '__main__':
      app.run(debug=True)
  
  ```

- 使用查询语句返回json格式数据库数据

  ```python
  @app.route('/')
  def index():
      db = pymysql.connect(host='localhost', user='root', password='123456', port=3306,
                           db='studentsystem')
      cur = db.cursor()
      sql = "SELECT `*` FROM `users` WHERE 1"
      cur.execute(sql)
      u = cur.fetchall()
      db.close()
      # 如果第1个json的第2个的值为管理员则输出管理员
      if("管理员"==u[0][1]):
          return jsonify(u[0][1])
  ```


## 操作

```python
users = [
    {'id': 1, 'username': 'Tom', 'password': '111111'},
    {'id': 2, 'username': 'Michael', 'password': '123456'}
]
@api.route('/cscscs', methods=['GET','POST'])
def query_user():
    for user in users:
        if 1 == user['id']:
            return user['username']
```



## 报错解决方案

- ModuleNotFoundError: No module named 'mysql'
  安装插件pip install mysql-connector

- 与v-for括号冲突报错找不到变量

```
app.jinja_env.variable_start_string = '{['
app.jinja_env.variable_end_string = ']}'
```

