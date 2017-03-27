function append_params_to_url(url, params){
  var target_url = url;
  if (target_url.indexOf('?') < 0){
    target_url += '?';
  }else{
    target_url += '&';
  }
  var query = [];
  for (var key in params){
    query.push(key + '=' + params[key]);
  }
  return target_url + query.join('&');
}
//===========COURSE===========================
CourseCrosssell = function(params, api) {
  this.params = params || {}
  this.api = api || "//crosssellads.edumall.vn/api/courses/crosssell_courses/v2"
}
CourseCrosssell.init = function(params, api) {
  var courseObject = new CourseCrosssell(params, api);
  window.course_crosssell = courseObject;
  courseObject.onReady();
}

CourseCrosssell.prototype.onReady = function() {
  this.callRequest();
}

CourseCrosssell.prototype.callRequest = function(){
  if( !window.jQuery) {
    return console.error("JQuery should be defined");
  }
  courseObject = this
  $.ajax({
    url:  courseObject.api,
    method:  'GET',
    data: courseObject.params,
    dataType: 'json',
    cache: false,
    beforeSend: function(a) {
      a.overrideMimeType("application/json; charset=UTF-8");
    }
  }).done(function(data){
    courseObject.handleCourse(data);
  })
}

CourseCrosssell.prototype.handleCourse = function(dataResult) {
  var courses = JSON.parse(dataResult['data']) || []
  var search = JSON.parse(dataResult['search'])
  courseObject = this
  if (courses.length > 0 ){
    courses.forEach(function(b){
      if(search){
        $(".search-result-main").removeClass('hide');
        $(".courses-result").prepend(b.content);
      }else{
        if($("#category-" + b.category).length > 0 ){
          $(b.content).insertBefore($("#category-" + b.category + " .list-course-card .course-card:nth(" + (parseInt(b.position) - 1).toString() +")"));
        }
      }
      courseObject.handleTrack(b.source, b.url, b.code);
    }) 
  }
}

CourseCrosssell.prototype.handleTrack = function(cate, target, code){
  cross_to = cate == 'Uni' ? "uni_crosssell" : "native_crosssell";
  if (typeof Spymaster != 'undefined' ){
    Spymaster.track({
      category: cross_to,
      behavior: 'impressed',
      target: target,
      extras: {}
    }, {
      url: append_params_to_url(document.URL, {cs_code: code, cs_type: 'feature_course'}),
      referer: document.referrer
    });
  }
}

